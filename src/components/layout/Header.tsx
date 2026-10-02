import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTheme } from "../theme/ThemeProvider";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 2.5rem;
  background: ${({ theme }) => theme.gradients.navGlass};
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 0.4s ease, border-color 0.4s ease;

  @media (max-width: 768px) {
    padding: 0.6rem 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.85rem;
  }
`;

const Logo = styled(Link)`
  font-family: "JetBrains Mono", monospace;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 3px;
  transition: color 0.2s;

  span.accent {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const LogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 14px;
  background: ${({ theme }) => theme.gradients.accent};
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  margin-right: 8px;
  font-family: "JetBrains Mono", monospace;

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 0.78rem;
    margin-right: 6px;
  }
`;

const NavCenter = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  padding: 0.3rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: min(300px, 85vw);
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 0.75rem;
    background: ${({ theme }) => theme.colors.background};
    border: none;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.35);
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1001;
    padding: 1.5rem 1.25rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
  }
`;

const DrawerHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const DrawerTitle = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const DrawerCloseBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const activeNavStyle = css`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  box-shadow: 0 2px 8px hsla(160, 60%, 45%, 0.25);
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.88rem;
  padding: 0.45rem 1rem;
  border-radius: 50px;
  transition: all 0.25s ease;
  position: relative;

  ${({ $active }) => $active && activeNavStyle}

  &:hover {
    color: ${({ theme, $active }) =>
      $active ? "#fff" : theme.colors.text};
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.surfaceHover};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 0.85rem 1.25rem;
    font-size: 0.95rem;
    border-radius: 12px;
  }
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: rotate(20deg);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 1000;
  }
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Header = () => {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close drawer on path change and manage body scroll
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/blog", label: "Blog", icon: "📝" },
    { to: "/about", label: "About", icon: "👤" },
  ];

  return (
    <>
      <Nav>
        <Logo to="/">
          <LogoMark>A</LogoMark>
          Anony<span className="accent">.blog</span>
        </Logo>

        <NavCenter $isOpen={menuOpen}>
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerCloseBtn onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <FiX size={18} />
            </DrawerCloseBtn>
          </DrawerHeader>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              $active={location.pathname === link.to}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            $active={location.pathname === "/login"}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
        </NavCenter>

        <RightGroup>
          <ThemeButton onClick={toggle} aria-label="Toggle theme">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </ThemeButton>
          <MobileMenuBtn
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuBtn>
        </RightGroup>
      </Nav>
      <Overlay $isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};
