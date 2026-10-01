import { useParams, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { usePost } from "../hooks/usePosts";
import { PostDetail } from "../components/post/PostDetail";
import { FiArrowLeft } from "react-icons/fi";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 45vh;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
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

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 45vh;
  text-align: center;
  padding: 2rem;
`;

const ErrorTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const BackBar = styled.div`
  padding: 0.75rem 2rem;
`;

export const Post = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, loading, error } = usePost(id || "");

  if (loading) {
    return (
      <LoadingWrapper>
        <Spinner />
        <LoadingText>Loading article...</LoadingText>
      </LoadingWrapper>
    );
  }

  if (error || !post) {
    return (
      <ErrorWrapper>
        <ErrorTitle>Post not found</ErrorTitle>
        <ErrorMsg>
          The article you're looking for doesn't exist or has been removed.
        </ErrorMsg>
        <BackLink to="/blog">
          <FiArrowLeft /> Back to Blog
        </BackLink>
      </ErrorWrapper>
    );
  }

  return (
    <>
      <BackBar>
        <BackLink to="/blog">
          <FiArrowLeft /> All Posts
        </BackLink>
      </BackBar>
      <PostDetail post={post} />
    </>
  );
};
