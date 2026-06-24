import styled from "styled-components";

export const Wrap = styled.div`
  padding: 0 16px 14px;
`;

export const Label = styled.div`
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--dim);
  margin-bottom: 4px;
`;

export const Title = styled.h2`
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<{ $glowRgb: string }>`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  transition:
    transform 0.22s,
    border-color 0.22s,
    box-shadow 0.22s;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-2px);
    border-color: rgba(${(p) => p.$glowRgb}, 0.45);
    box-shadow: 0 0 18px rgba(${(p) => p.$glowRgb}, 0.12);
  }
`;

export const Icon = styled.div`
  font-size: 17px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.div`
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
`;

export const CardDesc = styled.div`
  font-size: 13px;
  color: var(--muted);
  line-height: 1.5;
  margin-bottom: 12px;
`;

export const Enter = styled.div<{ $color: string }>`
  font-size: 12px;
  font-weight: 500;
  color: var(--dim);
  transition: color 0.2s;
  ${Card}:hover & {
    color: ${(p) => p.$color};
  }
`;
