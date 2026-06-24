import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SECTIONS = [
  {
    icon: "🛍",
    title: "SHOP",
    path: "/shop",
    color: "var(--cyan)",
    border: "rgba(0,245,255,0.35)",
    glow: "rgba(0,245,255,0.05)",
    desc: "Full clothing store. Browse drops, add to cart, checkout — all in one slick flow.",
    tags: [
      { t: "PRODUCTS", c: "tc" },
      { t: "CART", c: "tc" },
      { t: "ORDERS", c: "tc" },
    ],
    enter: "ENTER",
  },

  {
    icon: "🎮",
    title: "GAMES",
    path: "/games",
    color: "var(--pink)",
    border: "rgba(254,1,154,0.35)",
    glow: "rgba(254,1,154,0.05)",
    desc: "Mini-games, leaderboards, earn points. Win rewards redeemable in the store.",
    tags: [
      { t: "ARCADE", c: "tp" },
      { t: "XP", c: "tp" },
      { t: "REWARDS", c: "tp" },
    ],
    enter: "PLAY",
  },

  {
    icon: "👥",
    title: "SOCIAL",
    path: "/social",
    color: "var(--green)",
    border: "rgba(0,255,136,0.35)",
    glow: "rgba(0,255,136,0.05)",
    desc: "Post your fits. Follow brands. Build your profile. Community for members only.",
    tags: [
      { t: "FEED", c: "tg" },
      { t: "PROFILES", c: "tg" },
      { t: "BRANDS", c: "tg" },
    ],
    enter: "CONNECT",
  },

  {
    icon: "✅",
    title: "TASKS",
    path: "/tasks",
    color: "var(--yellow)",
    border: "rgba(255,230,0,0.35)",
    glow: "rgba(255,230,0,0.05)",
    desc: "Plan photoshoots. Assign to team. Track deadlines. Built for creative operations.",
    tags: [
      { t: "SHOOTS", c: "ty" },
      { t: "TEAM", c: "ty" },
      { t: "KANBAN", c: "ty" },
    ],
    enter: "MANAGE",
  },

  {
    icon: "📸",
    title: "SHOOT PLANNER",
    path: "/shoot-planner",
    color: "var(--orange)",
    border: "rgba(255,136,0,0.35)",
    glow: "rgba(255,136,0,0.05)",
    desc: "Mood boards, locations, schedules. Everything needed before the camera clicks.",
    tags: [
      { t: "MOOD BOARD", c: "to" },
      { t: "SCHEDULE", c: "to" },
    ],
    enter: "PLAN",
  },

  {
    icon: "🔐",
    title: "ADMIN",
    path: "/admin",
    color: "var(--purple)",
    border: "rgba(160,0,255,0.35)",
    glow: "rgba(160,0,255,0.05)",
    desc: "Your private control room. Manage products, orders, users, analytics. Owner only.",
    tags: [
      { t: "PRIVATE", c: "tpur" },
      { t: "ANALYTICS", c: "tpur" },
    ],
    enter: "ACCESS",
  },
];

const TAG_COLORS: Record<string, string> = {
  tc: "#00f5ff",
  tp: "#fe019a",
  tg: "#00ff88",
  ty: "#ffe600",
  to: "#ff8800",
  tpur: "#a000ff",
};
const TAG_BORDERS: Record<string, string> = {
  tc: "rgba(0,245,255,0.3)",
  tp: "rgba(254,1,154,0.3)",
  tg: "rgba(0,255,136,0.3)",
  ty: "rgba(255,230,0,0.3)",
  to: "rgba(255,136,0,0.3)",
  tpur: "rgba(160,0,255,0.3)",
};

const Wrap = styled.div`
  padding: 0 16px 14px;
`;

const Label = styled.div`
  font-size: 9px;
  letter-spacing: 4px;
  color: var(--muted);
  text-transform: uppercase;
  padding-bottom: 5px;
`;

const Title = styled.h2`
  font-family: var(--fd);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #d0dae6;
  margin-bottom: 12px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ $border: string; $glow: string }>`
  background: var(--card);
  border: 1px solid ${(p) => p.$border};
  box-shadow: 0 0 10px ${(p) => p.$glow};
  border-radius: 6px;
  padding: 14px;
  cursor: pointer;
  transition: all 0.22s;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-2px);
    border-color: ${(p) => p.$border.replace("0.35", "0.7")};
    box-shadow: 0 0 20px ${(p) => p.$glow.replace("0.05", "0.12")};
  }
`;

const Icon = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardTitle = styled.div`
  font-family: var(--fd);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #d0dae6;
  margin-bottom: 6px;
`;

const CardDesc = styled.div`
  font-size: 10px;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
`;

const Tag = styled.span<{ $color: string; $border: string }>`
  font-size: 8px;
  padding: 2px 6px;
  letter-spacing: 1px;
  border-radius: 2px;
  color: ${(p) => p.$color};
  border: 1px solid ${(p) => p.$border};
  background: ${(p) => p.$color}0f;
`;

const Enter = styled.div`
  font-size: 9px;
  letter-spacing: 2px;
  color: var(--dim);
  transition: color 0.2s;
  ${Card}:hover & {
    color: var(--muted);
  }
`;

export default function Sections() {
  const navigate = useNavigate(); // ← add this

  return (
    <Wrap>
      <Label>// PLATFORM SECTIONS</Label>
      <Title>Choose your zone</Title>
      <Grid>
        {SECTIONS.map((s) => (
          <Card
            key={s.title}
            $border={s.border}
            $glow={s.glow}
            onClick={() => navigate(s.path)} // ← add this
          >
            <Icon>{s.icon}</Icon>
            <CardTitle>{s.title}</CardTitle>
            <CardDesc>{s.desc}</CardDesc>
            <Tags>
              {s.tags.map((tag) => (
                <Tag
                  key={tag.t}
                  $color={TAG_COLORS[tag.c]}
                  $border={TAG_BORDERS[tag.c]}
                >
                  {tag.t}
                </Tag>
              ))}
            </Tags>
            <Enter>→ {s.enter}</Enter>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
