import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const LinkList = styled.div<{ $vertical: boolean; $responsive: boolean }>`
  display: flex;
  flex-direction: ${({ $vertical }) => ($vertical ? "column" : "row")};
  align-items: center;
  gap: 0.65rem;

  @media (max-width: 768px) {
    ${({ $responsive }) =>
      $responsive &&
      `
        flex-direction: row;
        gap: 0.55rem;
      `}
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

const SocialRailFrame = styled.aside`
  position: fixed;
  top: 50%;
  right: 1.25rem;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    width: fit-content;
    margin: 0.5rem 0.85rem 0.25rem auto;
    transform: none;
  }
`;

interface SocialLinksProps {
  vertical?: boolean;
  responsive?: boolean;
}

export const SocialLinks = ({
  vertical = false,
  responsive = false,
}: SocialLinksProps) => (
  <LinkList
    $vertical={vertical}
    $responsive={responsive}
    role="group"
    aria-label="Social links"
  >
    <SocialLink
      href="https://github.com/anony"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <FiGithub />
    </SocialLink>
    <SocialLink
      href="https://linkedin.com/in/anony"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <FiLinkedin />
    </SocialLink>
    <SocialLink
      href="https://twitter.com/anony"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      title="Twitter"
    >
      <FiTwitter />
    </SocialLink>
    <SocialLink href="mailto:anony@example.com" aria-label="Email" title="Email">
      <FiMail />
    </SocialLink>
  </LinkList>
);

export const SocialRail = () => (
  <SocialRailFrame aria-label="Connect with Anony">
    <SocialLinks vertical responsive />
  </SocialRailFrame>
);
