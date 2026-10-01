import styled, { keyframes } from "styled-components";
import { Post } from "../../hooks/usePosts";
import { PostCard } from "./PostCard";

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const LoadingText = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  font-family: "JetBrains Mono", monospace;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.muted};

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

interface PostListProps {
  posts: Post[];
  loading?: boolean;
}

export const PostList = ({ posts, loading }: PostListProps) => {
  if (loading)
    return (
      <LoadingWrapper>
        <Spinner />
        <LoadingText>Loading posts...</LoadingText>
      </LoadingWrapper>
    );

  if (posts.length === 0) {
    return (
      <EmptyState>
        <h3>No posts found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </EmptyState>
    );
  }

  return (
    <Grid>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Grid>
  );
};
