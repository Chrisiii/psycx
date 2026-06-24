import styled from "styled-components";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import AIBar from "../components/AIBar";

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 245, 255, 0.2),
    rgba(254, 1, 154, 0.2),
    transparent
  );
  margin: 0 16px 14px;
`;

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <Sections />
      <AIBar />
    </main>
  );
}
