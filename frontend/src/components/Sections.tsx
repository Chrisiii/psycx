import { useNavigate } from "react-router-dom";
import {
  Wrap,
  Label,
  Title,
  Grid,
  Card,
  Icon,
  CardTitle,
  CardDesc,
  Enter,
} from "../styles/Sections.styles";

const SECTIONS = [
  {
    icon: "🛍",
    title: "Shop",
    path: "/shop",
    color: "var(--lilac)",
    glowRgb: "185, 142, 255",
    desc: "Browse drops, checkout in one flow.",
    enter: "enter",
  },
  {
    icon: "🎮",
    title: "Games",
    path: "/games",
    color: "var(--pink)",
    glowRgb: "255, 122, 193",
    desc: "Mini-games, leaderboards, rewards.",
    enter: "play",
  },
  {
    icon: "👥",
    title: "Social",
    path: "/social",
    color: "var(--lilac)",
    glowRgb: "185, 142, 255",
    desc: "Post fits, follow brands, build profile.",
    enter: "connect",
  },
  {
    icon: "✅",
    title: "Tasks",
    path: "/tasks",
    color: "var(--pink)",
    glowRgb: "255, 122, 193",
    desc: "Plan shoots, assign team, track work.",
    enter: "manage",
  },
  {
    icon: "📸",
    title: "Shoot planner",
    path: "/shoot-planner",
    color: "var(--lilac)",
    glowRgb: "185, 142, 255",
    desc: "Mood boards, locations, schedules.",
    enter: "plan",
  },
  {
    icon: "🔐",
    title: "Admin",
    path: "/admin",
    color: "var(--pink)",
    glowRgb: "255, 122, 193",
    desc: "Manage products, orders, analytics.",
    enter: "access",
  },
];

export default function Sections() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Label>// platform sections</Label>
      <Title>Choose your zone</Title>
      <Grid>
        {SECTIONS.map((s) => (
          <Card
            key={s.title}
            $glowRgb={s.glowRgb}
            onClick={() => navigate(s.path)}
          >
            <Icon>{s.icon}</Icon>
            <CardTitle>{s.title}</CardTitle>
            <CardDesc>{s.desc}</CardDesc>
            <Enter $color={s.color}>→ {s.enter}</Enter>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
