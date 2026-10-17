import styled from "styled-components";
import { Link } from "react-router-dom";
import { Post } from "../../hooks/usePosts";
import { formatDate } from "../../utils/formatDate";

const Item = styled.article`
  padding: 1.35rem 0;

  & + & {
    border-top: 1px solid ${({ theme }) => `${theme.colors.border}80`};
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const DateLine = styled.time`
  display: block;
  font-size: 0.72rem;
  font-family: "JetBrains Mono", monospace;
  color: ${({ theme }) => theme.colors.muted};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`;

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.35;
  transition: color 0.2s ease;

  ${ItemLink}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Excerpt = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0.3rem 0 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 640px;
`;

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => (
  <Item>
    <ItemLink to={`/post/${post.id}`}>
      <DateLine>{formatDate(post.publishedAt)}</DateLine>
      <Title>{post.title}</Title>
      {post.excerpt && <Excerpt>{post.excerpt}</Excerpt>}
    </ItemLink>
  </Item>
);
