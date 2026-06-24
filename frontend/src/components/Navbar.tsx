import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  background: var(--nav);
  border-bottom: 1px solid rgba(0, 245, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
`;
const Logo = styled.div`
  font-family: var(--fd);
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #00f5ff;
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.6);
  cursor: pointer;
  span {
    color: var(--pink);
    text-shadow: 0 0 10px rgba(254, 1, 154, 0.6);
  }
`;
const Links = styled.div`
  display: flex;
  gap: 2px;
`;

const NavLink = styled.button<{ $active?: boolean }>`
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
const Actions = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const BtnOutline = styled.button`
  background: transparent;
  border: 1px solid rgba(0, 245, 255, 0.3);
  color: var(--cyan);
  font-size: 11px;
  padding: 5px 8px;
  transition: all 0.2s;
  &:hover {
    background: rgba(0, 245, 255, 0.06);
  }
`;
const BtnSolid = styled.button`
  background: linear-gradient(135deg, #00c8ff, #7b00ff);
  border: none;
  color: #fff;
  font-family: var(--fd);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 6px 14px;
  border-radius: 3px;
  &:hover {
    opacity: 0.85;
  }
`;

const LINKS = [
  { label: "Shop", path: "/shop" },
  { label: "Games", path: "/games" },
  { label: "Social", path: "/social" },
  { label: "Tasks", path: "/tasks" },
  { label: "Admin", path: "/admin" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Nav>
      <Logo onClick={() => navigate("/")}>
        PSY<span>CX</span>
      </Logo>
      <Links>
        {LINKS.map((l) => (
          <NavLink
            key={l.label}
            $active={location.pathname === l.path}
            onClick={() => navigate(l.path)}
          >
            {l.label}
          </NavLink>
        ))}
      </Links>
      <Actions>
        <BtnOutline>⌕</BtnOutline>
        <BtnOutline>🔔</BtnOutline>
        <BtnSolid>CONNECT</BtnSolid>
      </Actions>
    </Nav>
  );
}
