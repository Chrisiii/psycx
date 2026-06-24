import styled, { keyframes } from "styled-components";

const pulse = keyframes`0%,100%{opacity:1}50%{opacity:.2}`;

export const Bar = styled.div`
  margin: 0 16px 14px;
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 8px var(--pink-glow);
  flex-shrink: 0;
  animation: ${pulse} 1.8s ease-in-out infinite;
`;

export const Text = styled.div`
  flex: 1;
  font-size: 10px;
  color: var(--muted);
  span {
    color: var(--pink);
    font-weight: 700;
  }
`;

export const Btn = styled.button`
  font-family: var(--fd);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 5px 12px;
  background: rgba(255, 122, 193, 0.08);
  border: 1px solid rgba(255, 122, 193, 0.3);
  color: var(--pink);
  flex-shrink: 0;
  border-radius: 4px;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: rgba(255, 122, 193, 0.16);
  }
`;
