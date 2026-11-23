import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft } from "react-icons/fi";
import { Container } from "../components/layout/Container";
import { paths } from "../routes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 55vh;
  padding: 3rem 0;
  text-align: center;
`;

const Code = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const Title = styled.h1`
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 420px;
  margin: 0 0 2rem;
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s, color 0.25s, box-shadow 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const NotFound = () => (
  <Container>
    <Helmet>
      <title>Page not found | Anony.blog</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Wrapper>
      <Code>404</Code>
      <Title>Page not found</Title>
      <Text>
        The page you are looking for does not exist or may have been moved.
      </Text>
      <HomeLink to={paths.home}>
        <FiArrowLeft /> Back to the blog
      </HomeLink>
    </Wrapper>
  </Container>
);
