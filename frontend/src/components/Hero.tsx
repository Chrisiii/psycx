import {
  Wrap,
  GridBg,
  GlowL,
  GlowR,
  Content,
  Tag,
  Title,
  Sub,
  Btns,
  BtnPrimary,
  BtnSecondary,
  Stats,
  Chip,
} from "../styles/Hero.styles";

export default function Hero() {
  return (
    <Wrap>
      <GridBg />
      <GlowL />
      <GlowR />
      <Content>
        <Tag>// SEASON 01 DROP</Tag>
        <Title>
          <span className="l1">Wear the future.</span>
          <span className="l2">Play the game.</span>
        </Title>
        <Sub>
          Clothing for those who blur the line between digital and real. Shop.
          Play. Connect.
        </Sub>
        <Btns>
          <BtnPrimary>Enter shop</BtnPrimary>
          <BtnSecondary>Play now</BtnSecondary>
        </Btns>
      </Content>
      <Stats>
        <Chip>
          <div className="n" style={{ color: "var(--lilac)" }}>
            247
          </div>
          <div className="l">products</div>
        </Chip>
        <Chip>
          <div className="n" style={{ color: "var(--pink)" }}>
            1.2k
          </div>
          <div className="l">members</div>
        </Chip>
        <Chip>
          <div className="n" style={{ color: "var(--lilac)" }}>
            24
          </div>
          <div className="l">live games</div>
        </Chip>
      </Stats>
    </Wrap>
  );
}
