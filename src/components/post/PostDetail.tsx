import styled, { keyframes } from "styled-components";
import { useMemo, useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Link } from "react-router-dom";
import { Post } from "../../hooks/usePosts";
import { formatDate } from "../../utils/formatDate";
import {
  FiClock,
  FiCalendar,
  FiUser,
  FiShare2,
  FiArrowUp,
  FiArrowLeft,
  FiList,
  FiCheck,
  FiChevronDown,
  FiChevronUp,
  FiX,
  FiBookOpen,
  FiBookmark,
} from "react-icons/fi";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const toastFade = keyframes`
  0% { opacity: 0; transform: translate(-50%, 20px); }
  15% { opacity: 1; transform: translate(-50%, 0); }
  85% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -10px); }
`;

/* Top Reading Progress Bar (Fixed directly beneath sticky nav) */
const ProgressBar = styled.div<{ $progress: number }>`
  position: fixed;
  top: 54px;
  left: 0;
  height: 3px;
  width: ${({ $progress }) => `${$progress}%`};
  background: ${({ theme }) => theme.gradients.accent};
  z-index: 999;
  transition: width 0.1s ease-out;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const HeroBanner = styled.div<{ $src?: string }>`
  width: 100%;
  height: 260px;
  background: ${({ $src, theme }) =>
    $src
      ? `linear-gradient(to bottom, transparent 40%, ${theme.colors.background}), url(${$src}) center/cover no-repeat`
      : theme.gradients.hero};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradients.heroOverlay};
  }

  @media (max-width: 768px) {
    height: 180px;
  }
  @media (max-width: 480px) {
    height: 150px;
  }
`;

const LayoutGrid = styled.div<{ $hasHero?: boolean }>`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 260px;
  gap: 1.75rem;
  max-width: 1280px;
  margin: ${({ $hasHero }) => ($hasHero ? "-3rem auto 0" : "1.25rem auto 0")};
  position: relative;
  z-index: 1;
  padding: 0 1.5rem 3rem;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 200px minmax(0, 1fr) 220px;
    gap: 1.25rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: ${({ $hasHero }) => ($hasHero ? "-1.5rem" : "0.75rem")};
    padding: 0 1rem 2.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem 2rem;
    margin-top: ${({ $hasHero }) => ($hasHero ? "-1rem" : "0.5rem")};
  }
`;

/* ── Left Sidebar (TOC) with separate scroll ── */
const SidebarLeft = styled.aside`
  position: sticky;
  top: 5rem;
  max-height: calc(100vh - 6.5rem);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-right: 0.25rem;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* ── Right Sidebar (Widgets) with separate scroll ── */
const SidebarRight = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: sticky;
  top: 5rem;
  max-height: calc(100vh - 6.5rem);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-right: 0.25rem;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* ── Center Column: Article ── */
const Article = styled.article`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: 2.25rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.elevation};
  animation: ${fadeUp} 0.6s ease-out;
  min-width: 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    padding: 1.15rem 0.95rem;
    border-radius: 14px;
  }
`;

const Widget = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 1.25rem;
  box-shadow: ${({ theme }) => theme.shadows.glass};
`;

const WidgetTitle = styled.h3`
  font-size: 0.92rem;
  margin-bottom: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: "JetBrains Mono", monospace;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TOCList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const TOCItem = styled.li<{ $active?: boolean; $level: number }>`
  font-size: 0.82rem;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.muted};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.25rem 0.5rem;
  padding-left: ${({ $level }) => ($level === 3 ? "1.25rem" : "0.5rem")};
  border-radius: 8px;
  border-left: 2px solid
    ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  background: ${({ theme, $active }) =>
    $active ? `${theme.colors.primary}12` : "transparent"};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => `${theme.colors.primary}08`};
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    line-height: 1.4;
  }
`;

/* ── Mobile In-Article TOC Collapsible ── */
const MobileTOCSection = styled.div`
  display: none;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  margin-bottom: 1.5rem;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileTOCHeader = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  .left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .badge {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.primary}18;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileTOCBody = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  padding: 0.4rem 0.75rem 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  max-height: 220px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;

/* ── Mobile Below-Article Widgets ── */
const MobileWidgetsSection = styled.div`
  display: none;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
`;

const AuthorAvatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.accent};
  color: #fff;
  font-family: "JetBrains Mono", monospace;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const AuthorName = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
`;

const AuthorBio = styled.div`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.5;
`;

const ReadingStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 0.65rem 0.75rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
`;

const StatVal = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatLbl = styled.div`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 2px;
`;

const Category = styled.span`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  background: ${({ theme }) => theme.colors.primary}18;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary}25;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(1.6rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.25;
  margin: 0 0 0.75rem;
  letter-spacing: -0.5px;
  word-break: break-word;
`;

const LeadParagraph = styled.p`
  font-size: clamp(1rem, 2vw, 1.12rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0.25rem 0 1rem;
`;

const MetaBar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 0.75rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ShareActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ActionBtn = styled.button<{ $primary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0.55rem 1rem;
  border: 1px solid
    ${({ theme, $primary }) =>
    $primary ? theme.colors.primary : theme.colors.border};
  border-radius: 50px;
  background: ${({ theme, $primary }) =>
    $primary ? theme.colors.primary : "transparent"};
  color: ${({ theme, $primary }) => ($primary ? "#fff" : theme.colors.text)};
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.25s;

  &:hover {
    background: ${({ theme, $primary }) =>
    $primary ? theme.colors.primaryHover : theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    box-shadow: ${({ theme }) => theme.shadows.glow};
    transform: translateY(-1px);
  }
`;

const MarkdownBody = styled.div`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.85;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  word-break: break-word;

  h2 {
    font-size: clamp(1.25rem, 3vw, 1.6rem);
    margin: 2.5rem 0 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    scroll-margin-top: 5rem;
    word-break: break-word;
  }

  h3 {
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    margin: 2rem 0 0.75rem;
    font-weight: 600;
    scroll-margin-top: 5rem;
    word-break: break-word;
  }

  p {
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  code {
    background: ${({ theme }) => theme.colors.codeBlock};
    padding: 0.15rem 0.45rem;
    border-radius: 8px;
    font-size: 0.88em;
    font-family: "JetBrains Mono", monospace;
    border: 1px solid ${({ theme }) => theme.colors.border};
    word-break: break-all;
  }

  pre {
    background: ${({ theme }) => theme.colors.codeBlock};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    padding: 1.25rem;
    overflow-x: auto;
    margin: 1.5rem 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }

    code {
      background: none;
      padding: 0;
      border: none;
      font-size: 0.85em;
      word-break: normal;
    }
  }

  table {
    display: block;
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
    margin: 1.5rem 0;
    font-size: 0.9rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
  }

  th,
  td {
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-align: left;
    white-space: nowrap;
  }

  th {
    background: ${({ theme }) => theme.colors.surface};
    font-weight: 600;
  }

  ul,
  ol {
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.primary};
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.colors.muted};
    font-style: italic;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 0 12px 12px 0;
    padding: 1rem 1.25rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    margin: 1.25rem 0;
  }
`;

const CodeBlockWrapper = styled.div`
  position: relative;

  pre {
    padding-right: 3.5rem;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CodeBlock = ({ children }: { children?: React.ReactNode }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <CodeBlockWrapper>
      <pre ref={preRef}>{children}</pre>
      <CopyButton
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy code"}
        title={copied ? "Copied!" : "Copy"}
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </CopyButton>
    </CodeBlockWrapper>
  );
};

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Tag = styled.span`
  padding: 0.25rem 0.7rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: "JetBrains Mono", monospace;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

/* ── Mobile Floating Quick Actions Dock ── */
const MobileFloatingDock = styled.div`
  display: none;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 990;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const FloatingPill = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 1rem;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  font-family: "JetBrains Mono", monospace;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35), ${({ theme }) => theme.shadows.glow};
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: translateY(-2px);
  }
`;

const FloatingCircleBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: translateY(-2px);
  }
`;

/* ── Mobile Slide-up TOC Drawer ── */
const DrawerOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1001;
`;

const DrawerContent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px 20px 0 0;
  z-index: 1002;
  padding: 1.25rem 1.5rem 2rem;
  max-height: 70vh;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.35);
  animation: ${slideUp} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 0.75rem;
`;

const DrawerTitle = styled.h4`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DrawerClose = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DrawerScrollArea = styled.div`
  overflow-y: auto;
  flex: 1;
  max-height: 55vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  padding-right: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`;

/* Toast notification */
const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.65rem 1.25rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), ${({ theme }) => theme.shadows.glow};
  z-index: 1100;
  animation: ${toastFade} 2.5s forwards;
  pointer-events: none;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function sanitizeHeadingId(raw: string) {
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface PostDetailProps {
  post: Post;
}

export const PostDetail = ({ post }: PostDetailProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");
  const [mobileTOCOpen, setMobileTOCOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Extract dynamic Table of Contents from markdown
  const toc = useMemo(() => {
    const headings: { id: string; text: string; level: number }[] = [];
    const regex = /(?:^|\n)(#{2,3})\s+(.*)/g;
    let match;
    while ((match = regex.exec(post.content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = sanitizeHeadingId(text);
      headings.push({ id, text, level });
    }
    return headings;
  }, [post.content]);

  // Word count & stats
  const wordCount = useMemo(() => {
    return post.content.split(/\s+/).filter(Boolean).length;
  }, [post.content]);

  // Track scroll progress & active heading
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check which heading is active
      const headingElements = toc.map((h) => document.getElementById(h.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveHeadingId(toc[i].id);
          return;
        }
      }
      if (toc.length > 0 && window.scrollY < 200) {
        setActiveHeadingId(toc[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2400);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch {
        // Fallback or dismissed
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      triggerToast("Link copied to clipboard!");
    }
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    triggerToast("Link copied to clipboard!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHeadingClick = (id: string) => {
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top scroll reading progress indicator */}
      <ProgressBar $progress={scrollProgress} />

      {post.thumbnail && <HeroBanner $src={post.thumbnail} />}

      <LayoutGrid $hasHero={Boolean(post.thumbnail)}>
        {/* ── LEFT COLUMN: Table of Contents (Desktop Sticky + Scroll) ── */}
        <SidebarLeft>
          <Widget>
            <WidgetTitle>
              <FiList /> Table of Contents
            </WidgetTitle>
            <TOCList>
              {toc.length > 0 ? (
                toc.map((heading, idx) => (
                  <TOCItem
                    key={idx}
                    $level={heading.level}
                    $active={activeHeadingId === heading.id}
                    onClick={() => handleHeadingClick(heading.id)}
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleHeadingClick(heading.id);
                      }}
                    >
                      {heading.text}
                    </a>
                  </TOCItem>
                ))
              ) : (
                <TOCItem $level={2} style={{ color: "inherit" }}>
                  No sections found
                </TOCItem>
              )}
            </TOCList>
          </Widget>
        </SidebarLeft>

        {/* ── MIDDLE COLUMN: Article Content ── */}
        <Article>
          <Category>{post.category}</Category>
          <Title>{post.title}</Title>
          {post.excerpt && <LeadParagraph>{post.excerpt}</LeadParagraph>}
          <MetaBar>
            <MetaItem>
              <FiCalendar size={15} />
              {formatDate(post.publishedAt)}
            </MetaItem>
            <MetaItem>
              <FiClock size={15} />
              {post.readTime}
            </MetaItem>
            <MetaItem>
              <FiBookOpen size={15} />
              {wordCount} words
            </MetaItem>
          </MetaBar>

          {/* Mobile & Tablet In-Article Table of Contents (Collapsible + Scroll) */}
          {toc.length > 0 && (
            <MobileTOCSection>
              <MobileTOCHeader
                $isOpen={mobileTOCOpen}
                onClick={() => setMobileTOCOpen(!mobileTOCOpen)}
              >
                <span className="left">
                  <FiList size={16} />
                  Table of Contents
                  <span className="badge">{toc.length} sections</span>
                </span>
                {mobileTOCOpen ? <FiChevronUp /> : <FiChevronDown />}
              </MobileTOCHeader>
              <MobileTOCBody $isOpen={mobileTOCOpen}>
                <TOCList>
                  {toc.map((heading, idx) => (
                    <TOCItem
                      key={idx}
                      $level={heading.level}
                      $active={activeHeadingId === heading.id}
                      onClick={() => handleHeadingClick(heading.id)}
                    >
                      <a
                        href={`#${heading.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleHeadingClick(heading.id);
                        }}
                      >
                        {heading.text}
                      </a>
                    </TOCItem>
                  ))}
                </TOCList>
              </MobileTOCBody>
            </MobileTOCSection>
          )}

          <MarkdownBody>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
                h2: ({ children }) => {
                  const text = String(children);
                  const id = sanitizeHeadingId(text);
                  return <h2 id={id}>{children}</h2>;
                },
                h3: ({ children }) => {
                  const text = String(children);
                  const id = sanitizeHeadingId(text);
                  return <h3 id={id}>{children}</h3>;
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </MarkdownBody>

          <TagsRow>
            {post.tags.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </TagsRow>

          {/* ── Mobile/Tablet Below-Article Widgets ── */}
          <MobileWidgetsSection>
            {/* Author */}
            <Widget>
              <WidgetTitle>
                <FiUser /> Author
              </WidgetTitle>
              <AuthorInfo>
                <AuthorAvatar>A</AuthorAvatar>
                <AuthorDetails>
                  <AuthorName>{post.author.name}</AuthorName>
                  <AuthorBio>
                    Sharing thoughts on software engineering, clean code, and
                    modern web development.
                  </AuthorBio>
                </AuthorDetails>
              </AuthorInfo>
            </Widget>

            {/* Reading Stats */}
            <Widget>
              <WidgetTitle>
                <FiClock /> Article Stats
              </WidgetTitle>
              <ReadingStatsGrid>
                <StatCard>
                  <StatVal>{post.readTime}</StatVal>
                  <StatLbl>Read Time</StatLbl>
                </StatCard>
                <StatCard>
                  <StatVal>{wordCount}</StatVal>
                  <StatLbl>Words</StatLbl>
                </StatCard>
              </ReadingStatsGrid>
            </Widget>

            {/* Share & Actions */}
            <Widget>
              <WidgetTitle>
                <FiShare2 /> Share Article
              </WidgetTitle>
              <ShareActions>
                <ActionBtn $primary onClick={handleShare}>
                  <FiShare2 size={14} />
                  Share Article
                </ActionBtn>
                <ActionBtn onClick={handleCopyLink}>
                  <FiCheck size={14} />
                  Copy Link
                </ActionBtn>
              </ShareActions>
            </Widget>
          </MobileWidgetsSection>
        </Article>

        {/* ── RIGHT COLUMN: Widgets (Desktop Sticky + Scroll) ── */}
        <SidebarRight>
          {/* Author Widget */}
          <Widget>
            <WidgetTitle>
              <FiUser /> Author
            </WidgetTitle>
            <AuthorInfo>
              <AuthorAvatar>A</AuthorAvatar>
              <AuthorDetails>
                <AuthorName>{post.author.name}</AuthorName>
                <AuthorBio>
                  Sharing thoughts on software engineering, clean code, and
                  modern web development.
                </AuthorBio>
              </AuthorDetails>
            </AuthorInfo>
          </Widget>

          {/* Reading Stats Widget */}
          <Widget>
            <WidgetTitle>
              <FiClock /> Reading Stats
            </WidgetTitle>
            <ReadingStatsGrid>
              <StatCard>
                <StatVal>{post.readTime}</StatVal>
                <StatLbl>Est. Time</StatLbl>
              </StatCard>
              <StatCard>
                <StatVal>{Math.round(scrollProgress)}%</StatVal>
                <StatLbl>Completed</StatLbl>
              </StatCard>
            </ReadingStatsGrid>
          </Widget>

          {/* Share Widget */}
          <Widget>
            <WidgetTitle>
              <FiShare2 /> Share
            </WidgetTitle>
            <ShareActions>
              <ActionBtn $primary onClick={handleShare}>
                <FiShare2 size={14} />
                Share Article
              </ActionBtn>
              <ActionBtn onClick={handleCopyLink}>
                <FiCheck size={14} />
                Copy Link
              </ActionBtn>
            </ShareActions>
          </Widget>

          {/* Quick Navigation Widget */}
          <Widget>
            <WidgetTitle>
              <FiBookmark /> Quick Links
            </WidgetTitle>
            <ShareActions>
              <ActionBtn onClick={scrollToTop}>
                <FiArrowUp size={14} />
                Scroll to Top
              </ActionBtn>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <ActionBtn>
                  <FiArrowLeft size={14} />
                  Back to All Posts
                </ActionBtn>
              </Link>
            </ShareActions>
          </Widget>
        </SidebarRight>
      </LayoutGrid>

      {/* ── Mobile Floating Quick Actions Dock (< 900px) ── */}
      <MobileFloatingDock>
        {toc.length > 0 && (
          <FloatingPill onClick={() => setDrawerOpen(true)}>
            <FiList size={14} />
            Contents
          </FloatingPill>
        )}
        <FloatingCircleBtn onClick={scrollToTop} aria-label="Scroll to top">
          <FiArrowUp size={16} />
        </FloatingCircleBtn>
      </MobileFloatingDock>

      {/* ── Mobile TOC Bottom Drawer Modal ── */}
      <DrawerOverlay
        $isOpen={drawerOpen}
        onClick={() => setDrawerOpen(false)}
      />
      <DrawerContent $isOpen={drawerOpen}>
        <DrawerHeader>
          <DrawerTitle>
            <FiList /> Table of Contents ({toc.length})
          </DrawerTitle>
          <DrawerClose onClick={() => setDrawerOpen(false)}>
            <FiX size={16} />
          </DrawerClose>
        </DrawerHeader>
        <DrawerScrollArea>
          <TOCList>
            {toc.map((heading, idx) => (
              <TOCItem
                key={idx}
                $level={heading.level}
                $active={activeHeadingId === heading.id}
                onClick={() => handleHeadingClick(heading.id)}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleHeadingClick(heading.id);
                  }}
                >
                  {heading.text}
                </a>
              </TOCItem>
            ))}
          </TOCList>
        </DrawerScrollArea>
      </DrawerContent>

      {/* Feedback Toast */}
      {showToast && (
        <Toast>
          <FiCheck /> {toastMsg}
        </Toast>
      )}
    </>
  );
};
