import styled, { keyframes } from "styled-components";

const blink = keyframes`0%,100%{opacity:1}50%{opacity:.3}`;

export const Foot = styled.footer`
  background: var(--nav);
  border-top: 1px solid var(--border);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-family: var(--fd);
  font-size: 9px;
  letter-spacing: 3px;
  color: var(--dim);
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 9px;
  letter-spacing: 1px;
  color: var(--dim);
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--online);
  box-shadow: 0 0 4px var(--online);
  animation: ${blink} 2s ease-in-out infinite;
`;
