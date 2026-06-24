import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrap = styled.section`
  position: relative;
  min-height: 260px;
  display: flex;
  align-items: center;
  padding: 36px 16px;
  overflow: hidden;
  background: var(--bg);
`;

export const GridBg = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(185, 142, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(185, 142, 255, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`;

export const GlowL = styled.div`
  position: absolute;
  top: -60px;
  left: -60px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(185, 142, 255, 0.08) 0%,
    transparent 65%
  );
  pointer-events: none;
`;

export const GlowR = styled.div`
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 122, 193, 0.07) 0%,
    transparent 65%
  );
  pointer-events: none;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 460px;
  animation: ${fadeUp} 0.5s ease both;
`;

export const Tag = styled.div`
  display: inline-block;
  font-size: 9px;
  letter-spacing: 3px;
  color: var(--lilac);
  border: 1px solid rgba(185, 142, 255, 0.3);
  background: rgba(185, 142, 255, 0.05);
  padding: 3px 10px;
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-family: var(--font-sans);
  font-size: 34px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 14px;
  .l1 {
    display: block;
    color: var(--text);
  }
  .l2 {
    display: block;
    color: var(--pink);
  }
`;

export const Sub = styled.p`
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 20px;
  line-height: 1.6;
  max-width: 360px;
  font-family: var(--font-sans);
`;

export const Btns = styled.div`
  display: flex;
  gap: 10px;
`;

export const BtnPrimary = styled.button`
  padding: 10px 18px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  background: var(--pink);
  border: none;
  color: #3a1228;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

export const BtnSecondary = styled.button`
  padding: 10px 18px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  background: transparent;
  border: 1px solid var(--lilac);
  color: var(--lilac);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(185, 142, 255, 0.08);
  }
`;

export const Stats = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Chip = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 16px;
  text-align: right;
  .n {
    font-family: var(--font-sans);
    font-size: 18px;
    font-weight: 700;
  }
  .l {
    font-size: 11px;
    color: var(--muted);
    text-transform: lowercase;
    margin-top: 2px;
  }
`;
