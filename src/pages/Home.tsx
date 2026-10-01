import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { PostCard } from "../components/post/PostCard";
import { Container } from "../components/layout/Container";
import { FiArrowRight, FiEdit3, FiBook, FiCode, FiTerminal } from "react-icons/fi";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px hsla(160, 60%, 45%, 0.15); }
  50% { box-shadow: 0 0 40px hsla(160, 60%, 45%, 0.3); }
`;

const Hero = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.heroOverlay || theme.gradients.heroOverlay};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(${({ theme }) => theme.colors.border} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.border} 1px, transparent 1px);
    background-size: 80px 80px;
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeUp} 0.8s ease-out;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  animation: ${fadeUp} 0.8s ease-out 0.1s both;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  animation: ${pulseGlow} 2s ease-in-out infinite;
`;

const HeroTitle = styled.h1`
  font-family: "JetBrains Mono", monospace;
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1.5rem;
  line-height: 1.15;
  letter-spacing: -1.5px;

  .highlight {
    background: ${({ theme }) => theme.gradients.accent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .secondary {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 550px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  animation: ${fadeUp} 0.8s ease-out 0.3s both;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.8s ease-out 0.5s both;
`;

const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  background: ${({ theme }) => theme.gradients.accent};
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glowStrong};
  }
`;

const SecondaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
    transform: translateY(-2px);
  }
`;

const HeroDecor = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  pointer-events: none;

  &.green {
    background: hsl(160, 60%, 45%);
    top: 20%;
    left: 10%;
    animation: ${float} 8s ease-in-out infinite;
  }

  &.purple {
    background: hsl(270, 55%, 60%);
    bottom: 15%;
    right: 10%;
    animation: ${float} 10s ease-in-out infinite reverse;
  }
`;

const Section = styled.section`
  padding: 5rem 0;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  letter-spacing: -0.5px;

  .accent {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ViewAll = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap 0.2s ease;

  &:hover {
    gap: 10px;
  }
`;

const PostsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 1.75rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.elevationHover};
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`;

const FeatureIcon = styled.div<{ $color?: string }>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: ${({ $color, theme }) => 
    $color === "green" ? `${theme.colors.primary}15` :
    $color === "purple" ? `${theme.colors.secondary}15` :
    `${theme.colors.accent}15`};
  color: ${({ $color, theme }) => 
    $color === "green" ? theme.colors.primary :
    $color === "purple" ? theme.colors.secondary :
    theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
  line-height: 1.6;
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2.5rem 0;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 0.25rem;
`;

export const Home = () => {
  const { data: latestPosts, loading } = usePosts({ limit: 3 });

  return (
    <>
      <Hero>
        <HeroDecor className="green" />
        <HeroDecor className="purple" />
        <HeroContent>
          <StatusBadge>
            <StatusDot />
            Available for work
          </StatusBadge>
          <HeroTitle>
            <span className="highlight">Thoughts</span>,{" "}
            <span className="secondary">Ideas</span>
            <br />& Code
          </HeroTitle>
          <HeroSubtitle>
            A place where I share my journey through software engineering,
            clean code practices, and modern web development.
          </HeroSubtitle>
          <HeroActions>
            <PrimaryBtn to="/blog">
              Read the Blog <FiArrowRight />
            </PrimaryBtn>
            <SecondaryBtn to="/about">About Me</SecondaryBtn>
          </HeroActions>
        </HeroContent>
      </Hero>

      <Container>
        <StatsBar>
          <StatItem>
            <StatNumber>6+</StatNumber>
            <StatLabel>Articles</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>5+</StatNumber>
            <StatLabel>Topics</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>∞</StatNumber>
            <StatLabel>Learning</StatLabel>
          </StatItem>
        </StatsBar>

        <Section>
          <SectionHeader>
            <SectionTitle>
              Latest <span className="accent">Posts</span>
            </SectionTitle>
            <ViewAll to="/blog">
              View all posts <FiArrowRight size={16} />
            </ViewAll>
          </SectionHeader>
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading…</p>
          ) : (
            <PostsGrid>
              {latestPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </PostsGrid>
          )}
        </Section>

        <Section>
          <SectionTitle style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            What You'll <span className="accent">Find</span> Here
          </SectionTitle>
          <p
            style={{
              textAlign: "center",
              maxWidth: "500px",
              margin: "0 auto",
              fontSize: "1rem",
            }}
          >
            Dive into topics I'm passionate about
          </p>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon $color="green">
                <FiCode />
              </FeatureIcon>
              <FeatureTitle>Clean Code</FeatureTitle>
              <FeatureDesc>
                Best practices and patterns for writing maintainable,
                readable software.
              </FeatureDesc>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon $color="purple">
                <FiBook />
              </FeatureIcon>
              <FeatureTitle>Tutorials</FeatureTitle>
              <FeatureDesc>
                Step-by-step guides on React, Go, TypeScript, and
                modern tooling.
              </FeatureDesc>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon $color="gold">
                <FiTerminal />
              </FeatureIcon>
              <FeatureTitle>Dev Insights</FeatureTitle>
              <FeatureDesc>
                Thoughts on architecture, developer productivity,
                and career growth.
              </FeatureDesc>
            </FeatureCard>
          </FeaturesGrid>
        </Section>
      </Container>
    </>
  );
};
