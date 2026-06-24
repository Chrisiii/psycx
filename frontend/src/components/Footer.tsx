import styled, { keyframes } from "styled-components";

const blink = keyframes`0%,100%{opacity:1}50%{opacity:.3}`;

const Foot = styled.footer`
  background: var(--nav);
  border-top: 1px solid rgba(0, 245, 255, 0.08);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-family: var(--fd);
  font-size: 9px;
  letter-spacing: 3px;
  color: var(--dim);
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 9px;
  letter-spacing: 1px;
  color: var(--dim);
`;
const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 4px var(--green);
  animation: ${blink} 2s ease-in-out infinite;
`;

export default function Footer() {
  return (
    <Foot>
      <Logo>PSYCX // v0.1</Logo>
      <Status>
        <Dot />
        SYSTEM ONLINE
      </Status>
    </Foot>
  );
}
