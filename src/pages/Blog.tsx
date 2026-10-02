import styled, { keyframes } from "styled-components";
import { useState, useMemo } from "react";
import { usePosts } from "../hooks/usePosts";
import { PostList } from "../components/post/PostList";
import { Container } from "../components/layout/Container";
import { FiSearch, FiX } from "react-icons/fi";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageHeader = styled.div`
  padding: 1.5rem 0 0.5rem;
  animation: ${fadeUp} 0.6s ease-out;
`;

/* Row 1: title + description on left, search on right */
const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`;

const TitleBlock = styled.div`
  flex-shrink: 0;
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

const SearchBar = styled.div`
  position: relative;
  flex: 1;
  max-width: 380px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.65rem 1.1rem 0.65rem 2.6rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px; /* Prevents auto-zoom on mobile */
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20,
                ${({ theme }) => theme.shadows.glow};
  }

  @media (min-width: 769px) {
    font-size: 0.85rem;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.muted};
  display: flex;
`;

const ClearBtn = styled.button`
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  display: flex;
  padding: 4px;
  border-radius: 50px;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceHover};
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
      <PageHeader>
        <TopRow>
          <TitleBlock>
            <PageTitle>
              The <span className="accent">Blog</span>
            </PageTitle>
            <PageSubtitle>
              Explore articles on development, design, and engineering
            </PageSubtitle>
          </TitleBlock>

          <SearchBar>
            <SearchIcon>
              <FiSearch size={16} />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <ClearBtn onClick={() => setSearch("")}>
                <FiX size={16} />
              </ClearBtn>
            )}
          </SearchBar>
        </TopRow>

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
