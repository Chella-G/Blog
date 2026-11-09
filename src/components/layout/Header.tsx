import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../theme/ThemeProvider";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { ThemeCustomizer } from "./ThemeCustomizer";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2.5rem;
  font-family: ${({ theme }) => theme.fonts.base};
  background: ${({ theme }) => theme.gradients.navGlass};
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.35s ease;

  @media (max-width: 768px) {
    padding: 0.6rem 1.25rem;
    background: ${({ theme }) => theme.colors.background};
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.85rem;
  }
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: ${({ theme }) => theme.fontSizes.xl};
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
    font-size: ${({ theme }) => theme.fontSizes.lg};
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
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-right: 8px;
  font-family: ${({ theme }) => theme.fonts.base};

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-right: 6px;
  }
`;

const NavCenter = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;

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
    border-radius: 0;
    box-shadow: -12px 0 40px rgba(0, 0, 0, 0.28);
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
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
  }
`;

const DrawerTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.base};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.base};
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

const NavLink = styled(Link)<{ $active?: boolean }>`
  position: relative;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text : theme.colors.textSecondary};
  text-decoration: none;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 0.35rem 0;
  margin: 0 0.9rem;
  border-radius: 0;
  transition: color 0.2s ease;

  /* Slim underline marks the current page without adding visual weight. */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.15rem;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: center;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    text-align: left;
    padding: 0.85rem 1rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
    border-radius: 10px;
    background: ${({ theme, $active }) =>
      $active ? theme.colors.surfaceHover : "transparent"};

    &::after {
      display: none;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.surfaceHover};
    }
  }
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  font-size: 1rem;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme }) => theme.colors.border};
  }

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
    z-index: 999;
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

  // Manage body scroll lock while the drawer is open.
  // Note: the drawer is closed in click handlers (links, logo, overlay, close button),
  // so no path-change effect is needed.
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
    { to: "/blog", label: "Blog", icon: "📝" },
  ];

  // The blog is the default page: highlight it on both "/" and "/blog".
  const isActive = (to: string) =>
    location.pathname === "/" ||
    location.pathname === to ||
    location.pathname.startsWith(`${to}/`);

  return (
    <>
      <Nav>
        <Logo to="/" onClick={() => setMenuOpen(false)}>
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
              $active={isActive(link.to)}
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
          <ThemeCustomizer />
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
