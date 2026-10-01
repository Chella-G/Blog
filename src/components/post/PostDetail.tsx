import styled, { keyframes } from "styled-components";
import ReactMarkdown from "react-markdown";
import { Post } from "../../hooks/usePosts";
import { formatDate } from "../../utils/formatDate";
import { FiClock, FiCalendar, FiUser, FiShare2 } from "react-icons/fi";
import { Container } from "../layout/Container";

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

const Article = styled.article`
  max-width: 780px;
  margin: -3rem auto 0;
  padding: 0 1.5rem 2rem;
  position: relative;
  z-index: 1;
  animation: ${fadeUp} 0.6s ease-out;
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
  gap: 6px;
  margin-left: auto;
  padding: 0.4rem 1rem;
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
  }

  h3 {
    font-size: 1.25rem;
    margin: 2rem 0 0.75rem;
    font-weight: 600;
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
      <Container>
        <Article>
          <Category>{post.category}</Category>
          <Title>{post.title}</Title>
          <MetaBar>
            <MetaItem>
              <FiUser size={15} />
              {post.author.name}
            </MetaItem>
            <MetaItem>
              <FiCalendar size={15} />
              {formatDate(post.publishedAt)}
            </MetaItem>
            <MetaItem>
              <FiClock size={15} />
              {post.readTime}
            </MetaItem>
            <ShareBtn onClick={handleShare}>
              <FiShare2 size={14} />
              Share
            </ShareBtn>
          </MetaBar>
          <MarkdownBody>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </MarkdownBody>
          <TagsRow>
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsRow>
        </Article>
      </Container>
    </>
  );
};
