import styled, { keyframes } from "styled-components";
import { Container } from "../components/layout/Container";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin } from "react-icons/fi";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  padding: 2rem 0 2rem;
  animation: ${fadeUp} 0.6s ease-out;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  margin: 0 auto 0.5rem;
`;

const Avatar = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 3.5rem;
  color: #fff;
  font-weight: 800;
  box-shadow: ${({ theme }) => theme.shadows.glowStrong};
  border: 3px solid ${({ theme }) => theme.colors.primary}40;
`;

const StatusDot = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`;

const Name = styled.h1`
  font-family: "JetBrains Mono", monospace;
  font-size: 2.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
  letter-spacing: -1px;
`;

const RoleBadges = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

const RoleBadge = styled.span<{ $variant?: "green" | "purple" | "gold" }>`
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1px solid;
  font-family: "JetBrains Mono", monospace;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "purple":
        return `
          color: ${theme.colors.secondary};
          background: ${theme.colors.secondary}12;
          border-color: ${theme.colors.secondary}25;
        `;
      case "gold":
        return `
          color: ${theme.colors.accent};
          background: ${theme.colors.accent}12;
          border-color: ${theme.colors.accent}25;
        `;
      default:
        return `
          color: ${theme.colors.primary};
          background: ${theme.colors.primary}12;
          border-color: ${theme.colors.primary}25;
        `;
    }
  }}
`;

const Bio = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto 0.5rem;
  line-height: 1.6;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.88rem;
  margin-bottom: 0.5rem;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.25s;
  font-size: 1.1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const Section = styled.section`
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  gap: 8px;

  .accent {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Skill = styled.span`
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: "JetBrains Mono", monospace;
  background: ${({ theme }) => theme.colors.primary}10;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}20;
    border-color: ${({ theme }) => theme.colors.primary}40;
  }
`;

const ContentBlock = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const About = () => (
  <Container>
    <PageWrapper>
      <Hero>
        <AvatarWrapper>
          <Avatar>A</Avatar>
          <StatusDot />
        </AvatarWrapper>
        <Name>Anony</Name>
        <RoleBadges>
          <RoleBadge $variant="green">&lt;&gt; Full Stack Developer</RoleBadge>
          <RoleBadge $variant="purple">&gt; Cybersecurity Enthusiast</RoleBadge>
        </RoleBadges>
        <Bio>
          Passionate software developer crafting secure, scalable applications.
          Sharing knowledge through clean code and modern web technologies.
        </Bio>
        <Location>
          <FiMapPin size={14} />
          India
        </Location>
        <SocialRow>
          <SocialLink
            href="https://github.com/anony"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/anony"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/anony"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter />
          </SocialLink>
          <SocialLink
            href="mailto:anony@example.com"
            aria-label="Email"
          >
            <FiMail />
          </SocialLink>
        </SocialRow>
      </Hero>

      <ContentBlock>
        <Section>
          <SectionTitle>About This <span className="accent">Blog</span></SectionTitle>
          <Text>
            Welcome to my corner of the internet! I write about software
            engineering, clean code practices, and the tools and frameworks
            that power the modern web.
          </Text>
          <Text>
            Whether you're a beginner looking for tutorials or an experienced
            developer exploring new patterns, you'll find something valuable
            here.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Skills & <span className="accent">Technologies</span></SectionTitle>
          <SkillsGrid>
            <Skill>React</Skill>
            <Skill>TypeScript</Skill>
            <Skill>Go</Skill>
            <Skill>Node.js</Skill>
            <Skill>PostgreSQL</Skill>
            <Skill>Docker</Skill>
            <Skill>Git</Skill>
            <Skill>REST APIs</Skill>
            <Skill>CSS / Styled Components</Skill>
            <Skill>Vite</Skill>
            <Skill>Linux</Skill>
            <Skill>Python</Skill>
          </SkillsGrid>
        </Section>

        <Section>
          <SectionTitle>Get In <span className="accent">Touch</span></SectionTitle>
          <Text>
            Have a question, suggestion, or just want to say hello? Feel free
            to reach out through any of the social links above or drop me an
            email. I'd love to hear from you!
          </Text>
        </Section>
      </ContentBlock>
    </PageWrapper>
  </Container>
);
