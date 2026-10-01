import { useState, useEffect } from "react";
import mockPosts from "../mocks/posts.json";

export interface Post {
  id: string;
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

interface UsePostsOptions {
  limit?: number;
  category?: string;
  tag?: string;
  search?: string;
}

/**
 * Fetches posts from mock data (swap to API later).
 * Supports filtering by category, tag, search, and pagination via limit.
 */
export const usePosts = (options?: UsePostsOptions) => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      let filtered: Post[] = [...mockPosts];

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
            p.tags.some((t) => t.toLowerCase().includes(q)),
        );
      }

      if (options?.limit) {
        filtered = filtered.slice(0, options.limit);
      }

      // Simulate network delay for realistic loading states
      const timer = setTimeout(() => {
        setData(filtered);
        setLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } catch (err) {
      setError("Failed to load posts");
      setLoading(false);
    }
  }, [options?.limit, options?.category, options?.tag, options?.search]);

  return { data, loading, error };
};

/**
 * Fetches a single post by ID from mock data.
 */
export const usePost = (id: string) => {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const post = mockPosts.find((p) => p.id === id) || null;
      const timer = setTimeout(() => {
        setData(post);
        setLoading(false);
        if (!post) setError("Post not found");
      }, 200);
      return () => clearTimeout(timer);
    } catch {
      setError("Failed to load post");
      setLoading(false);
    }
  }, [id]);

  return { data, loading, error };
};
