import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const Wrap = styled.section`
  position: relative;
  min-height: 260px;
  display: flex;
  align-items: center;
  padding: 36px 16px;
  overflow: hidden;
  background: var(--bg);
`;
const GridBg = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 245, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 245, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`;
const GlowL = styled.div`
  position: absolute;
  top: -60px;
  left: -60px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 245, 255, 0.1) 0%,
    transparent 65%
  );
  pointer-events: none;
`;
const GlowR = styled.div`
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(254, 1, 154, 0.08) 0%,
    transparent 65%
  );
  pointer-events: none;
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 460px;
  animation: ${fadeUp} 0.5s ease both;
`;
const Tag = styled.div`
  display: inline-block;
  font-size: 9px;
  letter-spacing: 3px;
  color: var(--green);
  border: 1px solid rgba(0, 255, 136, 0.35);
  background: rgba(0, 255, 136, 0.05);
  padding: 3px 10px;
  margin-bottom: 12px;
`;
const Title = styled.h1`
  font-family: var(--fd);
  font-size: 36px;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 2px;
  margin-bottom: 12px;
  .l1 {
    display: block;
    color: #e0e8f0;
  }
  .l2 {
    display: block;
    color: var(--cyan);
    text-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
  }
  .l3 {
    display: block;
    color: var(--pink);
    text-shadow: 0 0 20px rgba(254, 1, 154, 0.5);
  }
`;
const Sub = styled.p`
  font-size: 11px;
  color: var(--muted);
  margin-bottom: 18px;
  line-height: 1.8;
  max-width: 340px;
`;
const Btns = styled.div`
  display: flex;
  gap: 10px;
`;

const BtnPrimary = styled.button`
  padding: 10px 20px;
  font-family: var(--fd);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #00c8ff, #7b00ff);
  border: none;
  color: #fff;
  border-radius: 3px;
  &:hover {
    opacity: 0.85;
  }
`;
const BtnSecondary = styled.button`
  padding: 10px 20px;
  font-family: var(--fd);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  background: transparent;
  border: 1px solid rgba(254, 1, 154, 0.5);
  color: var(--pink);
  border-radius: 3px;
  &:hover {
    background: rgba(254, 1, 154, 0.08);
  }
`;
const Stats = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Chip = styled.div`
  background: rgba(10, 10, 30, 0.9);
  border: 1px solid rgba(0, 245, 255, 0.15);
  border-radius: 8px;
  padding: 10px 14px;
  text-align: right;
  .n {
    font-family: var(--fd);
    font-size: 20px;
    font-weight: 900;
  }
  .l {
    font-size: 9px;
    color: var(--muted);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 1px;
  }
`;

export default function Hero() {
  return (
    <Wrap>
      <GridBg />
      <GlowL />
      <GlowR />
      <Content>
        <Tag>// SEASON 01 DROP</Tag>
        <Title>
          <span className="l1">WEAR THE</span>
          <span className="l2">FUTURE.</span>
          <span className="l3">PLAY THE GAME.</span>
        </Title>
        <Sub>
          Clothing for those who blur the line between digital and real. Shop.
          Play. Connect.
        </Sub>
        <Btns>
          <BtnPrimary>ENTER SHOP</BtnPrimary>
          <BtnSecondary>PLAY NOW</BtnSecondary>
        </Btns>
      </Content>
      <Stats>
        <Chip>
          <div
            className="n"
            style={{
              color: "#00f5ff",
              textShadow: "0 0 10px rgba(0,245,255,0.6)",
            }}
          >
            247
          </div>
          <div className="l">Products</div>
        </Chip>
        <Chip>
          <div
            className="n"
            style={{
              color: "#fe019a",
              textShadow: "0 0 10px rgba(254,1,154,0.6)",
            }}
          >
            1.2K
          </div>
          <div className="l">Members</div>
        </Chip>
        <Chip>
          <div
            className="n"
            style={{
              color: "#00ff88",
              textShadow: "0 0 10px rgba(0,255,136,0.6)",
            }}
          >
            24
          </div>
          <div className="l">Live Games</div>
        </Chip>
      </Stats>
    </Wrap>
  );
}
