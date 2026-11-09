import styled, { keyframes } from "styled-components";
import { useState, useMemo, useRef, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import { PostList } from "../components/post/PostList";
import { Container } from "../components/layout/Container";
import { FiSearch, FiX } from "react-icons/fi";
import { SEO } from "../components/layout/SEO";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageHeader = styled.div`
  padding: 1.5rem 0 0.5rem;
  animation: ${fadeUp} 0.6s ease-out;
`;

/* Title row: heading + compact search trigger on the same line */
const TitleInline = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  letter-spacing: -1px;
  line-height: 1.2;

  .accent {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.78rem;
  margin: 0.15rem 0 0;
`;

const reveal = keyframes`
  from { opacity: 0; transform: scaleX(0.9); transform-origin: left center; }
  to { opacity: 1; transform: scaleX(1); transform-origin: left center; }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 260px;
  max-width: 380px;
  height: 40px;
  padding: 0 0.5rem 0 0.95rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surface};
  cursor: text;
  -webkit-tap-highlight-color: transparent;
  animation: ${reveal} 0.25s ease-out;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20,
    ${({ theme }) => theme.shadows.glow};
  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;

  /* Mobile: stays inline; wraps under the title only on very narrow screens */
  @media (max-width: 768px) {
    flex: 1 1 240px;
    max-width: 100%;
    height: 48px;
    padding: 0 0.65rem 0 1.05rem;
  }

  @media (max-width: 480px) {
    height: 46px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 0.4rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px; /* Prevents auto-zoom on mobile */
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  @media (min-width: 769px) {
    font-size: 0.88rem;
  }
`;

/* Compact search trigger: icon-only by default, expands on hover/focus
   to reveal "Click to search" + the Ctrl K shortcut. Declared before
   SearchIcon so the icon's hover selectors can reference it. */
const SearchTrigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 40px;
  width: max-content;
  max-width: 40px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  transition: max-width 0.3s ease, padding 0.3s ease, gap 0.3s ease,
    border-color 0.25s, box-shadow 0.25s, color 0.25s;

  /* No gap while collapsed so the icon sits dead-center of the circle */
  gap: 0;

  &:hover,
  &:focus-visible {
    gap: 0.5rem;
    max-width: 280px;
    padding: 0 0.65rem;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  @media (max-width: 768px) {
    height: 44px;
    min-width: 44px;
    max-width: 44px;

    &:hover,
    &:focus-visible {
      max-width: 240px;
    }
  }
`;

const TriggerLabel = styled.span`
  font-size: 0.85rem;
  white-space: nowrap;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.3s ease, opacity 0.25s ease;

  ${SearchTrigger}:hover &,
  ${SearchTrigger}:focus-visible & {
    max-width: 12rem;
    opacity: 1;
  }

  /* Touch devices have no hover; the tap opens search directly */
  @media (hover: none) {
    display: none;
  }
`;

/* "Ctrl K" shortcut chip revealed together with the label */
const TriggerHint = styled.kbd`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.62rem;
  letter-spacing: 0.5px;
  padding: 0.2rem 0.45rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.surfaceHover};
  color: ${({ theme }) => theme.colors.muted};
  white-space: nowrap;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  transition: max-width 0.3s ease, opacity 0.25s ease, padding 0.25s ease;

  ${SearchTrigger}:hover &,
  ${SearchTrigger}:focus-visible & {
    max-width: 6rem;
    opacity: 1;
  }

  @media (max-width: 768px), (hover: none) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  display: flex;
  flex-shrink: 0;
  transition: color 0.25s;

  ${SearchBar}:focus-within &,
  ${SearchTrigger}:hover &,
  ${SearchTrigger}:focus-visible & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ClearBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50px;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s;

  /* 44px touch target on mobile */
  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    margin-left: 0.15rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  &:active {
    transform: scale(0.9);
  }
`;

/* Row 2: filter chips with horizontal scroll on mobile */
const Filters = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  overflow-x: auto;
  padding: 0.2rem 0 0.4rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  @media (min-width: 769px) {
    flex-wrap: wrap;
    overflow-x: visible;
  }
`;

const FilterChip = styled.button<{ $active: boolean }>`
  padding: 0.35rem 0.95rem;
  border-radius: 50px;
  white-space: nowrap;
  flex-shrink: 0;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.border};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ theme, $active }) => ($active ? "#fff" : theme.colors.textSecondary)};
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $active }) =>
      $active ? "#fff" : theme.colors.primary};
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primaryHover : `${theme.colors.primary}10`};
  }
`;

const ResultCount = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.78rem;
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  padding-bottom: 2rem;
`;

export const Blog = () => {
  const { data: allPosts, loading } = usePosts();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Ctrl/Cmd + K opens & focuses search; Escape closes it (input focused only)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
        searchRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === searchRef.current) {
        setSearch("");
        setSearchOpen(false);
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Always put the caret in the freshly opened search box
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const categories = useMemo(() => {
    const cats = new Set(allPosts.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    let result = [...allPosts];

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    return result;
  }, [allPosts, activeCategory, search]);

  return (
    <Container>
      <SEO
        title="Software Development Articles | Anony.blog"
        description="Browse practical software development tutorials, web engineering guides, and notes on tools and technology."
        path="/blog"
      />
      <PageHeader>
        <TitleInline>
          <PageTitle>
            The <span className="accent">Blog</span>
          </PageTitle>
          {searchOpen ? (
            <SearchBar>
              <SearchIcon>
                <FiSearch size={17} />
              </SearchIcon>
              <SearchInput
                ref={searchRef}
                type="text"
                placeholder="Search posts..."
                aria-label="Search posts"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                enterKeyHint="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => {
                  // Collapse back to the icon trigger when left empty
                  if (!search.trim()) setSearchOpen(false);
                }}
              />
              {search.trim() && (
                <ClearBtn
                  onClick={() => {
                    setSearch("");
                    searchRef.current?.focus();
                  }}
                  aria-label="Clear search"
                >
                  <FiX size={15} />
                </ClearBtn>
              )}
            </SearchBar>
          ) : (
            <SearchTrigger
              onClick={() => setSearchOpen(true)}
              aria-label="Search posts"
            >
              <SearchIcon>
                <FiSearch size={17} />
              </SearchIcon>
              <TriggerLabel>Click to search</TriggerLabel>
              <TriggerHint aria-hidden="true">Ctrl K</TriggerHint>
            </SearchTrigger>
          )}
        </TitleInline>
        <PageSubtitle>
          Explore articles on development, design, and engineering
        </PageSubtitle>

        <Filters>
          {categories.map((cat) => (
            <FilterChip
              key={cat}
              $active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </FilterChip>
          ))}
        </Filters>
      </PageHeader>

      <Content>
        {!loading && (
          <ResultCount>
            {filteredPosts.length} post{filteredPosts.length !== 1 && "s"} found
          </ResultCount>
        )}
        <PostList posts={filteredPosts} loading={loading} />
      </Content>
    </Container>
  );
};
