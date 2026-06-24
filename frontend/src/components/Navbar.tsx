import { useNavigate, useLocation } from "react-router-dom";
import {
  Actions,
  BtnOutline,
  BtnSolid,
  Links,
  Logo,
  Nav,
  NavLink,
} from "../styles/Navbar.styles";

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
        <BtnSolid>Connect</BtnSolid>
      </Actions>
    </Nav>
  );
}
