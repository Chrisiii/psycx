import { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const PRODUCTS = [
  {
    id: 1,
    emoji: "👕",
    category: "HOODIE",
    name: "NEON DRIFT OVERSIZED",
    price: 89,
    oldPrice: 120,
    badge: "HOT",
    color: "#fe019a",
    borderColor: "rgba(254,1,154,0.25)",
    hoverBorder: "rgba(254,1,154,0.55)",
    hoverShadow: "rgba(254,1,154,0.1)",
    bg: "linear-gradient(135deg,#fce8f3,#f5d0ea)",
    sizes: ["S", "M", "XL"],
    soldOut: ["L"],
    rating: 5,
    reviews: 42,
    liked: true,
  },
  {
    id: 2,
    emoji: "🧥",
    category: "JACKET",
    name: "CYBER RAIN JACKET",
    price: 145,
    oldPrice: null,
    badge: "NEW",
    color: "#0088aa",
    borderColor: "rgba(0,136,170,0.25)",
    hoverBorder: "rgba(0,136,170,0.55)",
    hoverShadow: "rgba(0,136,170,0.1)",
    bg: "linear-gradient(135deg,#e0f4ff,#c8eaff)",
    sizes: ["S", "M", "L"],
    soldOut: [],
    rating: 4,
    reviews: 18,
    liked: false,
  },
  {
    id: 3,
    emoji: "👚",
    category: "TEE",
    name: "GLITCH LOGO TEE",
    price: 35,
    oldPrice: 55,
    badge: "SALE",
    color: "#b47800",
    borderColor: "rgba(180,120,0,0.25)",
    hoverBorder: "rgba(180,120,0,0.55)",
    hoverShadow: "rgba(180,120,0,0.1)",
    bg: "linear-gradient(135deg,#fffbe0,#fff5c0)",
    sizes: ["XS", "S", "M", "L"],
    soldOut: [],
    rating: 5,
    reviews: 67,
    liked: false,
  },
  {
    id: 4,
    emoji: "🩳",
    category: "BOTTOMS",
    name: "PSYCX CARGO PANTS",
    price: 95,
    oldPrice: null,
    badge: "HOT",
    color: "#7700bb",
    borderColor: "rgba(119,0,187,0.25)",
    hoverBorder: "rgba(119,0,187,0.55)",
    hoverShadow: "rgba(119,0,187,0.1)",
    bg: "linear-gradient(135deg,#f0e8ff,#e4d0ff)",
    sizes: ["S", "L", "XL"],
    soldOut: ["M"],
    rating: 4,
    reviews: 31,
    liked: false,
  },
  {
    id: 5,
    emoji: "🧢",
    category: "ACCESSORIES",
    name: "MATRIX SNAPBACK",
    price: 45,
    oldPrice: null,
    badge: "NEW",
    color: "#007744",
    borderColor: "rgba(0,119,68,0.25)",
    hoverBorder: "rgba(0,119,68,0.55)",
    hoverShadow: "rgba(0,119,68,0.1)",
    bg: "linear-gradient(135deg,#e0fff4,#c8ffe8)",
    sizes: ["ONE SIZE"],
    soldOut: [],
    rating: 5,
    reviews: 89,
    liked: true,
  },
  {
    id: 6,
    emoji: "👟",
    category: "FOOTWEAR",
    name: "HYPERWAVE RUNNERS",
    price: 165,
    oldPrice: null,
    badge: null,
    color: "#bb5000",
    borderColor: "rgba(187,80,0,0.25)",
    hoverBorder: "rgba(187,80,0,0.55)",
    hoverShadow: "rgba(187,80,0,0.1)",
    bg: "linear-gradient(135deg,#fff2e0,#ffe4c0)",
    sizes: ["40", "41", "43"],
    soldOut: ["42"],
    rating: 4,
    reviews: 24,
    liked: false,
  },
  {
    id: 7,
    emoji: "🧣",
    category: "ACCESSORIES",
    name: "VOID SCARF SET",
    price: 55,
    oldPrice: null,
    badge: "HOT",
    color: "#fe019a",
    borderColor: "rgba(254,1,154,0.25)",
    hoverBorder: "rgba(254,1,154,0.55)",
    hoverShadow: "rgba(254,1,154,0.1)",
    bg: "linear-gradient(135deg,#fce8f3,#f5d0ea)",
    sizes: ["ONE SIZE"],
    soldOut: [],
    rating: 5,
    reviews: 55,
    liked: false,
  },
  {
    id: 8,
    emoji: "🥿",
    category: "FOOTWEAR",
    name: "DRIFT LOW SNEAKERS",
    price: 125,
    oldPrice: 150,
    badge: "NEW",
    color: "#0088aa",
    borderColor: "rgba(0,136,170,0.25)",
    hoverBorder: "rgba(0,136,170,0.55)",
    hoverShadow: "rgba(0,136,170,0.1)",
    bg: "linear-gradient(135deg,#e8f0ff,#d0e4ff)",
    sizes: ["38", "39", "40"],
    soldOut: ["41"],
    rating: 4,
    reviews: 37,
    liked: false,
  },
];

const FILTERS = ["ALL", "HOODIES", "TEES", "JACKETS", "ACCESSORIES", "SALE"];

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
`;
const Main = styled.main`
  flex: 1;
`;

const Breadcrumb = styled.div`
  padding: 12px 16px 0;
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 1px;
  span {
    color: var(--pink);
  }
`;
const ShopHeader = styled.div`
  padding: 12px 16px 14px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const TitleWrap = styled.div``;
const SLabel = styled.div`
  font-size: 9px;
  letter-spacing: 4px;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 3px;
`;
const H1 = styled.h1`
  font-family: var(--fd);
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--text);
  span {
    color: var(--pink);
  }
`;
const Meta = styled.div`
  font-size: 10px;
  color: var(--muted);
  text-align: right;
  strong {
    display: block;
    font-family: var(--fd);
    font-size: 13px;
    color: var(--text);
  }
`;
const Filters = styled.div`
  display: flex;
  gap: 6px;
  padding: 0 16px 14px;
  flex-wrap: wrap;
  align-items: center;
`;
const FilterBtn = styled.button<{ $active?: boolean }>`
  font-family: var(--fm);
  font-size: 9px;
  letter-spacing: 2px;
  padding: 5px 12px;
  background: ${(p) => (p.$active ? "rgba(254,1,154,0.04)" : "var(--card)")};
  border: 1px solid ${(p) => (p.$active ? "var(--pink)" : "var(--border-card)")};
  color: ${(p) => (p.$active ? "var(--pink)" : "var(--muted)")};
  border-radius: 3px;
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    border-color: var(--pink);
    color: var(--pink);
  }
`;
const SearchWrap = styled.div`
  margin-left: auto;
  position: relative;
  input {
    background: var(--card);
    border: 1px solid var(--border-card);
    color: var(--text);
    font-family: var(--fm);
    font-size: 10px;
    padding: 5px 12px 5px 28px;
    width: 180px;
    outline: none;
    border-radius: 3px;
    transition: border-color 0.2s;
    &::placeholder {
      color: var(--dim);
    }
    &:focus {
      border-color: var(--pink);
    }
  }
`;
const SearchIcon = styled.span`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  font-size: 13px;
`;
const SortSelect = styled.select`
  background: var(--card);
  border: 1px solid var(--border-card);
  color: var(--muted);
  font-family: var(--fm);
  font-size: 9px;
  padding: 5px 10px;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
`;
const ActiveFilters = styled.div`
  display: flex;
  gap: 6px;
  padding: 0 16px 14px;
  align-items: center;
`;
const AFLabel = styled.div`
  font-size: 9px;
  letter-spacing: 1px;
  color: var(--muted);
  text-transform: uppercase;
`;
const AFChip = styled.div`
  font-size: 9px;
  padding: 2px 8px;
  background: rgba(254, 1, 154, 0.06);
  border: 1px solid rgba(254, 1, 154, 0.25);
  color: var(--pink);
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(254, 1, 154, 0.1);
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0 16px 16px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Card = styled.div<{ $border: string; $hover: string; $shadow: string }>`
  background: var(--card);
  border: 1px solid ${(p) => p.$border};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.22s;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  &:hover {
    transform: translateY(-3px);
    border-color: ${(p) => p.$hover};
    box-shadow: 0 8px 24px ${(p) => p.$shadow};
  }
`;
const PImg = styled.div<{ $bg: string }>`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(p) => p.$bg};
`;
const Emoji = styled.div`
  font-size: 48px;
`;

const Badge = styled.div<{ $type: string }>`
  position: absolute;
  top: 8px;
  left: 8px;
  font-family: var(--fd);
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 7px;
  border-radius: 2px;
  background: ${(p) =>
    p.$type === "HOT"
      ? "var(--pink)"
      : p.$type === "NEW"
        ? "#0088aa"
        : "#ffcc00"};
  color: ${(p) => (p.$type === "SALE" ? "#0d0020" : "#fff")};
`;
const Wish = styled.div<{ $liked?: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  background: var(--card);
  border: 1px solid var(--border-card);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  color: ${(p) => (p.$liked ? "var(--pink)" : "inherit")};
  transition: all 0.2s;
  &:hover {
    border-color: var(--pink);
    color: var(--pink);
  }
`;
const Sizes = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  gap: 3px;
`;
const Size = styled.div<{ $avail?: boolean }>`
  font-size: 8px;
  padding: 1px 5px;
  background: var(--card);
  border: 1px solid ${(p) => (p.$avail ? "var(--border-card)" : "transparent")};
  color: ${(p) => (p.$avail ? "var(--text)" : "var(--dim)")};
  border-radius: 2px;
  opacity: ${(p) => (p.$avail ? 1 : 0.4)};
`;
const Info = styled.div`
  padding: 10px 12px 12px;
`;
const Category = styled.div`
  font-size: 8px;
  letter-spacing: 2px;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 3px;
`;
const PName = styled.div`
  font-family: var(--fd);
  font-size: 11px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.3;
`;
const Pricing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Price = styled.span<{ $color: string }>`
  font-family: var(--fd);
  font-size: 13px;
  font-weight: 900;
  color: ${(p) => p.$color};
`;
const OldPrice = styled.span`
  font-size: 10px;
  color: var(--dim);
  text-decoration: line-through;
  margin-left: 4px;
`;
const Rating = styled.div`
  font-size: 9px;
  color: #ffaa00;
  span {
    color: var(--muted);
    margin-left: 2px;
  }
`;
const AddBtn = styled.button<{ $color: string }>`
  width: 100%;
  padding: 7px;
  font-family: var(--fd);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  background: transparent;
  border: 1px solid ${(p) => p.$color}55;
  color: ${(p) => p.$color};
  border-radius: 3px;
  transition: all 0.2s;
  &:hover {
    background: ${(p) => p.$color}11;
    border-color: ${(p) => p.$color};
  }
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 4px 16px 20px;
`;
const PPage = styled.div<{ $active?: boolean }>`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fd);
  font-size: 10px;
  font-weight: 700;
  background: ${(p) => (p.$active ? "rgba(254,1,154,0.04)" : "var(--card)")};
  border: 1px solid ${(p) => (p.$active ? "var(--pink)" : "var(--border-card)")};
  color: ${(p) => (p.$active ? "var(--pink)" : "var(--muted)")};
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s;
  &:hover {
    border-color: var(--pink);
    color: var(--pink);
  }
`;
const PInfo = styled.div`
  font-size: 10px;
  color: var(--muted);
  margin: 0 8px;
  letter-spacing: 1px;
`;

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [likedItems, setLikedItems] = useState<number[]>([1, 5]);

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const filtered = PRODUCTS.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (activeFilter === "ALL") return true;
    if (activeFilter === "SALE") return p.oldPrice !== null;
    return p.category.includes(activeFilter.slice(0, -1));
  });

  return (
    <Page>
      <Navbar />
      <Main>
        <Breadcrumb>
          HOME / <span>SHOP</span>
        </Breadcrumb>

        <ShopHeader>
          <TitleWrap>
            <SLabel>// PSYCX STORE</SLabel>
            <H1>
              SHOP <span>DROP</span>
            </H1>
          </TitleWrap>
          <Meta>
            <strong>{filtered.length}</strong>
            items available
          </Meta>
        </ShopHeader>

        <Filters>
          {FILTERS.map((f) => (
            <FilterBtn
              key={f}
              $active={activeFilter === f}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </FilterBtn>
          ))}
          <SearchWrap>
            <SearchIcon>⌕</SearchIcon>
            <input
              type="text"
              placeholder="SEARCH DROPS..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrap>
          <SortSelect>
            <option>NEWEST</option>
            <option>PRICE ↑</option>
            <option>PRICE ↓</option>
            <option>HOT</option>
          </SortSelect>
        </Filters>

        <ActiveFilters>
          <AFLabel>ACTIVE:</AFLabel>
          <AFChip>{activeFilter} ✕</AFChip>
          <AFChip>IN STOCK ✕</AFChip>
        </ActiveFilters>

        <Grid>
          {filtered.map((p) => (
            <Card
              key={p.id}
              $border={p.borderColor}
              $hover={p.hoverBorder}
              $shadow={p.hoverShadow}
            >
              <PImg $bg={p.bg}>
                <Emoji>{p.emoji}</Emoji>
                {p.badge && <Badge $type={p.badge}>{p.badge}</Badge>}
                <Wish
                  $liked={likedItems.includes(p.id)}
                  onClick={() => toggleLike(p.id)}
                >
                  {likedItems.includes(p.id) ? "♥" : "♡"}
                </Wish>
                <Sizes>
                  {p.sizes.map((s) => (
                    <Size key={s} $avail>
                      {s}
                    </Size>
                  ))}
                  {p.soldOut.map((s) => (
                    <Size key={s}>{s}</Size>
                  ))}
                </Sizes>
              </PImg>
              <Info>
                <Category>{p.category}</Category>
                <PName>{p.name}</PName>
                <Pricing>
                  <div>
                    <Price $color={p.color}>${p.price}</Price>
                    {p.oldPrice && <OldPrice>${p.oldPrice}</OldPrice>}
                  </div>
                  <Rating>
                    {"★".repeat(p.rating)}
                    {"☆".repeat(5 - p.rating)}
                    <span>({p.reviews})</span>
                  </Rating>
                </Pricing>
                <AddBtn $color={p.color}>+ ADD TO CART</AddBtn>
              </Info>
            </Card>
          ))}
        </Grid>

        <Pagination>
          <PPage>‹</PPage>
          <PPage $active>1</PPage>
          <PPage>2</PPage>
          <PPage>3</PPage>
          <PPage>...</PPage>
          <PPage>12</PPage>
          <PPage>›</PPage>
          <PInfo>247 ITEMS</PInfo>
        </Pagination>
      </Main>
      <Footer />
    </Page>
  );
}
