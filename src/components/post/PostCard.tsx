import styled from "styled-components";
import { Link } from "react-router-dom";
import { Post } from "../../hooks/usePosts";
import { formatDate } from "../../utils/formatDate";
import { FiClock, FiArrowUpRight } from "react-icons/fi";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradients.accent};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.shadows.glow};

    &::before {
      opacity: 1;
    }
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

const Thumbnail = styled.div<{ $src: string }>`
  width: 100%;
  height: 200px;
  background: url(${({ $src }) => $src}) center/cover no-repeat;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(transparent, ${({ theme }) => theme.colors.surface});
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const Category = styled.span`
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  background: ${({ theme }) => theme.colors.primary}18;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary}25;
`;

const ReadTime = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
  transition: color 0.2s;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Excerpt = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0.25rem 0 1.25rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const MetaDate = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const ReadMore = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.82rem;
  transition: gap 0.25s ease;

  ${Card}:hover & {
    gap: 8px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Tag = styled.span`
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  font-size: 0.68rem;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.muted};
  font-family: "JetBrains Mono", monospace;
`;

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => (
  <Card>
    <CardLink to={`/post/${post.id}`}>
      {post.thumbnail && <Thumbnail $src={post.thumbnail} />}
      <Content>
        <TopRow>
          <Category>{post.category}</Category>
          <ReadTime>
            <FiClock size={12} />
            {post.readTime}
          </ReadTime>
        </TopRow>
        <Title>{post.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
        <Meta>
          <MetaDate>{formatDate(post.publishedAt)}</MetaDate>
          <ReadMore>
            Read <FiArrowUpRight size={14} />
          </ReadMore>
        </Meta>
        <Tags>
          {post.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </Tags>
      </Content>
    </CardLink>
  </Card>
);
