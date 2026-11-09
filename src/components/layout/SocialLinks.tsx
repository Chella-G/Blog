import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const LinkList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  @media (max-width: 768px) {
    gap: 0.55rem;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
  text-decoration: none;
  transition: color 180ms ease, transform 180ms ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.12);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 0.95rem;
  }
`;

export const SocialLinks = () => (
  <LinkList role="group" aria-label="Social links">
    <SocialLink
      href="https://github.com/Chella23"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <FiGithub />
    </SocialLink>
    <SocialLink
      href="https://linkedin.com/in/chella-g"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <FiLinkedin />
    </SocialLink>
    <SocialLink
      href="https://twitter.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      title="Twitter"
    >
      <FiTwitter />
    </SocialLink>
    <SocialLink href="mailto:chellagovindaraj@gmail.com" aria-label="Email" title="Email">
      <FiMail />
    </SocialLink>
  </LinkList>
);
