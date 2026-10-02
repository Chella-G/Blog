import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiMail } from "react-icons/fi";

const FooterWrapper = styled.footer`
  padding: 1.5rem 2rem 1rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
  transition: background 0.4s ease;
  position: relative;

  @media (max-width: 480px) {
    padding: 1.25rem 1rem 0.85rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: 2px;
  }
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FooterBrand = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterDesc = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  max-width: 400px;
  margin: 0 auto 0.5rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.25s ease;
  font-size: 1.1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin-bottom: 1.5rem;
`;

const CopyText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.8rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  svg {
    color: hsl(0, 70%, 55%);
  }
`;

export const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <FooterBrand>
        Anony<span>.blog</span>
      </FooterBrand>
      <FooterDesc>
        Sharing thoughts on software engineering, clean code, and modern web development.
      </FooterDesc>
      <SocialLinks>
        <IconLink
          href="https://github.com/anony"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FiGithub />
        </IconLink>
        <IconLink
          href="https://linkedin.com/in/anony"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </IconLink>
        <IconLink
          href="https://twitter.com/anony"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FiTwitter />
        </IconLink>
        <IconLink
          href="mailto:anony@example.com"
          aria-label="Email"
        >
          <FiMail />
        </IconLink>
      </SocialLinks>
      <Divider />
      <CopyText>
        &copy; {new Date().getFullYear()} Anony.blog — Made with{" "}
        <FiHeart size={13} /> in India
      </CopyText>
    </FooterContent>
  </FooterWrapper>
);
