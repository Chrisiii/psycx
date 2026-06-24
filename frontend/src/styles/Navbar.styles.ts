import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  background: var(--nav);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  font-family: var(--fd);
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 3px;
  color: var(--lilac);
  text-shadow: 0 0 10px var(--lilac-glow);
  cursor: pointer;
  span {
    color: var(--pink);
    text-shadow: 0 0 10px var(--pink-glow);
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 2px;
`;

export const NavLink = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  border-bottom: 2px solid ${(p) => (p.$active ? "var(--pink)" : "transparent")};
  font-family: var(--fm);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(p) => (p.$active ? "var(--pink)" : "var(--muted)")};
  padding: 5px 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: var(--pink);
    border-bottom-color: var(--pink);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const BtnOutline = styled.button`
  background: transparent;
  border: 1px solid var(--border);
  color: var(--lilac);
  font-size: 11px;
  padding: 5px 8px;
  border-radius: 4px;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: rgba(185, 142, 255, 0.06);
  }
`;

export const BtnSolid = styled.button`
  background: linear-gradient(135deg, var(--lilac), var(--pink));
  border: none;
  color: #1a0f2e;
  font-family: var(--fd);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 6px 14px;
  border-radius: 4px;
  transition: opacity 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
