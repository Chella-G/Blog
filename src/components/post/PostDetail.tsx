import styled, { keyframes } from "styled-components";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { Post } from "../../hooks/usePosts";
import { formatDate } from "../../utils/formatDate";
import { FiClock, FiCalendar, FiUser, FiShare2 } from "react-icons/fi";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroBanner = styled.div<{ $src?: string }>`
  width: 100%;
  height: 280px;
  background: ${({ $src, theme }) =>
    $src
      ? `linear-gradient(to bottom, transparent 40%, ${theme.colors.background}), url(${$src}) center/cover no-repeat`
      : theme.gradients.hero};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradients.heroOverlay};
  }
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr 240px;
  gap: 2rem;
  max-width: 1280px;
  margin: -3rem auto 0;
  position: relative;
  z-index: 1;
  padding: 0 1.5rem 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 240px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -1.5rem;
  }
`;

const SidebarLeft = styled.aside`
  position: sticky;
  top: 6rem;
  height: max-content;
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SidebarRight = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: 6rem;
  height: max-content;
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  scrollbar-width: thin;
  padding-right: 0.5rem;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Article = styled.article`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 18px;
  padding: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.elevation};
  animation: ${fadeUp} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StickyWidget = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.glass};
`;

const Widget = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.glass};
`;

const WidgetTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: "JetBrains Mono", monospace;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TOCList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TOCItem = styled.li`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const AuthorBio = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.5;
`;

const Category = styled.span`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  background: ${({ theme }) => theme.colors.primary}18;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary}25;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.75rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin: 0 0 0.5rem;
  letter-spacing: -0.5px;
`;

const MetaBar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ShareBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 500;
  transition: all 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const MarkdownBody = styled.div`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.85;
  font-size: 1.05rem;

  h2 {
    font-size: 1.5rem;
    margin: 2.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    scroll-margin-top: 6rem;
  }

  h3 {
    font-size: 1.25rem;
    margin: 2rem 0 0.75rem;
    font-weight: 600;
    scroll-margin-top: 6rem;
  }

  p {
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  code {
    background: ${({ theme }) => theme.colors.codeBlock};
    padding: 0.15rem 0.45rem;
    border-radius: 8px;
    font-size: 0.88em;
    font-family: "JetBrains Mono", monospace;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  pre {
    background: ${({ theme }) => theme.colors.codeBlock};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 18px;
    padding: 1.25rem;
    overflow-x: auto;
    margin: 1.5rem 0;

    code {
      background: none;
      padding: 0;
      border: none;
      font-size: 0.85em;
    }
  }

  ul,
  ol {
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.colors.muted};
    font-style: italic;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 0 8px 8px 0;
    padding: 1rem 1.25rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    font-size: 0.92rem;
  }

  th,
  td {
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colors.surface};
    font-weight: 600;
  }

  img {
    max-width: 100%;
    border-radius: 18px;
    margin: 1rem 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Tag = styled.span`
  padding: 0.25rem 0.7rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 500;
  font-family: "JetBrains Mono", monospace;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

interface PostDetailProps {
  post: Post;
}

export const PostDetail = ({ post }: PostDetailProps) => {
  const toc = useMemo(() => {
    const headings: { id: string; text: string; level: number }[] = [];
    const regex = /(?:^|\n)(#{2,3})\s+(.*)/g;
    let match;
    while ((match = regex.exec(post.content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ id, text, level });
    }
    return headings;
  }, [post.content]);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      {post.thumbnail && <HeroBanner $src={post.thumbnail} />}
      
      <LayoutGrid>
        {/* Left Column: Table of Contents */}
        <SidebarLeft>
          <StickyWidget>
            <WidgetTitle>Table of Contents</WidgetTitle>
            <TOCList>
              {toc.length > 0 ? (
                toc.map((heading, idx) => (
                  <TOCItem 
                    key={idx} 
                    style={{ paddingLeft: heading.level === 3 ? "1rem" : "0" }}
                  >
                    <a href={`#${heading.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {heading.text}
                    </a>
                  </TOCItem>
                ))
              ) : (
                <TOCItem>No sections found</TOCItem>
              )}
            </TOCList>
          </StickyWidget>
        </SidebarLeft>

        {/* Middle Column: Article Content */}
        <Article>
          <Category>{post.category}</Category>
          <Title>{post.title}</Title>
          <MetaBar>
            <MetaItem>
              <FiCalendar size={15} />
              {formatDate(post.publishedAt)}
            </MetaItem>
            <MetaItem>
              <FiClock size={15} />
              {post.readTime}
            </MetaItem>
          </MetaBar>
          <MarkdownBody>
            <ReactMarkdown
              components={{
                h2: ({ children }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  return <h2 id={id}>{children}</h2>;
                },
                h3: ({ children }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  return <h3 id={id}>{children}</h3>;
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </MarkdownBody>
          <TagsRow>
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsRow>
        </Article>

        {/* Right Column: Widgets */}
        <SidebarRight>
          {/* Author Widget */}
          <Widget>
            <WidgetTitle>
              <FiUser /> Author
            </WidgetTitle>
            <AuthorInfo>
              <AuthorName>{post.author.name}</AuthorName>
              <AuthorBio>Sharing thoughts on software engineering, clean code, and modern web development.</AuthorBio>
            </AuthorInfo>
          </Widget>

          {/* Share Widget */}
          <Widget>
            <WidgetTitle>Share</WidgetTitle>
            <ShareBtn onClick={handleShare}>
              <FiShare2 size={14} />
              Share Article
            </ShareBtn>
          </Widget>
        </SidebarRight>
      </LayoutGrid>
    </>
  );
};
