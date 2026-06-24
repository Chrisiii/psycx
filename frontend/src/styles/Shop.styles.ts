import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
`;

export const Main = styled.main`
  flex: 1;
`;

export const Breadcrumb = styled.div`
  padding: 16px 24px 0;
  font-size: 12px;
  color: var(--muted);
  font-family: var(--font-sans);
  span {
    color: var(--text);
  }
`;

export const ShopHeader = styled.div`
  padding: 6px 24px 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TitleWrap = styled.div``;

export const SLabel = styled.div`
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--muted);
  margin-bottom: 6px;
  font-family: var(--font-sans);
`;

export const H1 = styled.h1`
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
`;

export const Meta = styled.div`
  font-size: 12px;
  color: var(--muted);
  text-align: right;
  font-family: var(--font-sans);
`;

export const MetaCount = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--text);
`;

export const Filters = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 0.5px solid var(--border);
  margin: 0 24px 20px;
`;

export const FilterBtn = styled.button<{ $active?: boolean; $sale?: boolean }>`
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: ${(p) => (p.$active ? 600 : 400)};
  padding: 0 0 16px;
  background: none;
  border: none;
  border-bottom: 2px solid
    ${(p) => (p.$active ? "var(--lilac)" : "transparent")};
  color: ${(p) =>
    p.$active ? "var(--text)" : p.$sale ? "var(--pink)" : "var(--muted)"};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${(p) => (p.$sale ? "var(--pink)" : "var(--text)")};
  }
`;

export const SearchWrap = styled.div`
  margin-left: auto;
  position: relative;
  input {
    background: transparent;
    border: 0.5px solid var(--border);
    color: var(--text);
    font-family: var(--font-sans);
    font-size: 13px;
    padding: 7px 14px 7px 32px;
    width: 180px;
    outline: none;
    border-radius: 6px;
    transition: border-color 0.2s;
    &::placeholder {
      color: var(--dim);
    }
    &:focus {
      border-color: var(--lilac);
    }
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  font-size: 13px;
`;

export const SortSelect = styled.select`
  background: transparent;
  border: 0.5px solid var(--border);
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 13px;
  padding: 7px 12px;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const ActiveFilters = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 24px 18px;
  align-items: center;
`;

export const AFLabel = styled.div`
  font-size: 12px;
  color: var(--muted);
  font-family: var(--font-sans);
`;

export const AFChip = styled.div`
  font-size: 12px;
  padding: 4px 10px;
  background: var(--card);
  border: 0.5px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--font-sans);
  &:hover {
    border-color: var(--lilac);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 24px 24px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  cursor: pointer;
`;

export const PImg = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--card);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  margin-bottom: 10px;
  transition: border-color 0.2s;
  ${Card}:hover & {
    border-color: var(--border-soft);
  }
`;

export const Emoji = styled.div`
  font-size: 38px;
  opacity: 0.5;
`;

export const Badge = styled.div<{ $type: string }>`
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  background: var(--bg);
  color: ${(p) => (p.$type === "NEW" ? "var(--lilac)" : "var(--pink)")};
`;

export const Wish = styled.div<{ $liked?: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
  color: ${(p) => (p.$liked ? "var(--pink)" : "var(--muted)")};
  transition: color 0.2s;
  &:hover {
    color: var(--pink);
  }
`;

export const Sizes = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 4px;
`;

export const Size = styled.div<{ $avail?: boolean }>`
  font-size: 10px;
  padding: 1px 6px;
  background: var(--bg);
  border: 0.5px solid ${(p) => (p.$avail ? "var(--border)" : "transparent")};
  color: ${(p) => (p.$avail ? "var(--text)" : "var(--dim)")};
  border-radius: 4px;
  opacity: ${(p) => (p.$avail ? 1 : 0.4)};
`;

export const Info = styled.div`
  padding: 0 2px;
`;

export const Category = styled.div`
  font-size: 11px;
  color: var(--muted);
  margin-bottom: 4px;
  font-family: var(--font-sans);
`;

export const PName = styled.div`
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.4;
`;

export const Pricing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Price = styled.span`
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
`;

export const OldPrice = styled.span`
  font-size: 12px;
  color: var(--dim);
  text-decoration: line-through;
  margin-left: 6px;
`;

export const Rating = styled.div`
  font-size: 11px;
  color: #d9a441;
  span {
    color: var(--muted);
    margin-left: 3px;
  }
`;

export const AddBtn = styled.button`
  width: 100%;
  padding: 8px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  background: transparent;
  border: 1px solid var(--lilac);
  color: var(--lilac);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(185, 142, 255, 0.08);
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 4px 24px 28px;
`;

export const PPage = styled.div<{ $active?: boolean }>`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: ${(p) => (p.$active ? 600 : 400)};
  background: transparent;
  color: ${(p) => (p.$active ? "var(--text)" : "var(--muted)")};
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.2s;
  &:hover {
    color: var(--text);
  }
`;

export const PInfo = styled.div`
  font-size: 12px;
  color: var(--muted);
  margin: 0 10px;
  font-family: var(--font-sans);
`;

export const StateMessage = styled.div`
  padding: 40px 24px;
  text-align: center;
  font-size: 13px;
  color: var(--muted);
  font-family: var(--font-sans);
`;
