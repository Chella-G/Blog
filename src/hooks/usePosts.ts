import { useState, useEffect } from "react";
import mockPostsData from "../mocks/posts.json";

export interface Post {
  id: string;
  slug?: string;
  file?: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  tags: string[];
  category: string;
  thumbnail: string;
  readTime: string;
}

export type PostMetadata = Omit<Post, "content"> & { content?: string };

interface UsePostsOptions {
  limit?: number;
  category?: string;
  tag?: string;
  search?: string;
}

// Vite glob raw markdown files loader
const markdownFiles = import.meta.glob<string>("../content/posts/*.md", {
  query: "?raw",
  import: "default",
});

async function getMarkdownContent(fileOrSlug?: string): Promise<string> {
  if (!fileOrSlug) return "";

  const cleanTarget = fileOrSlug.endsWith(".md") ? fileOrSlug : `${fileOrSlug}.md`;
  const directPath = `../content/posts/${cleanTarget}`;

  if (markdownFiles[directPath]) {
    return await markdownFiles[directPath]();
  }

  // Fallback search across glob keys
  for (const [path, loader] of Object.entries(markdownFiles)) {
    if (path.endsWith(`/${cleanTarget}`) || path.endsWith(`/${fileOrSlug}`)) {
      return await loader();
    }
  }

  return "";
}

/**
 * Fetches post list from mock metadata.
 * Does not eagerly load heavy markdown bodies, keeping list views blazing fast.
 */
export const usePosts = (options?: UsePostsOptions) => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      let filtered: Post[] = (mockPostsData as PostMetadata[]).map((p) => ({
        ...p,
        content: p.content || "",
      }));

      if (options?.category) {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() === options.category!.toLowerCase(),
        );
      }

      if (options?.tag) {
        filtered = filtered.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === options.tag!.toLowerCase()),
        );
      }

      if (options?.search) {
        const q = options.search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            p.tags.some((t) => t.toLowerCase() === options.tag!.toLowerCase()),
        );
      }

      if (options?.limit) {
        filtered = filtered.slice(0, options.limit);
      }

      const timer = setTimeout(() => {
        setData(filtered);
        setLoading(false);
      }, 150);

      return () => clearTimeout(timer);
    } catch {
      setError("Failed to load posts");
      setLoading(false);
    }
  }, [options?.limit, options?.category, options?.tag, options?.search]);

  return { data, loading, error };
};

/**
 * Fetches a single post by ID or slug, loading the corresponding markdown file dynamically.
 */
export const usePost = (id: string) => {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const postMeta = (mockPostsData as PostMetadata[]).find(
          (p) => p.id === id || p.slug === id,
        );

        if (!postMeta) {
          if (isMounted) {
            setData(null);
            setError("Post not found");
            setLoading(false);
          }
          return;
        }

        const rawContent = await getMarkdownContent(postMeta.file || postMeta.slug);

        if (isMounted) {
          setData({
            ...postMeta,
            content: rawContent,
          });
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setError("Failed to load post");
          setLoading(false);
        }
      }
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { data, loading, error };
};
