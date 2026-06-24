import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../../app/store"; // adjust path

import {
  Page,
  Main,
  Breadcrumb,
  ShopHeader,
  TitleWrap,
  SLabel,
  H1,
  Meta,
  MetaCount,
  Filters,
  FilterBtn,
  SearchWrap,
  SearchIcon,
  SortSelect,
  ActiveFilters,
  AFLabel,
  AFChip,
  Grid,
  Card,
  PImg,
  Emoji,
  Badge,
  Wish,
  Sizes,
  Size,
  Info,
  Category,
  PName,
  Pricing,
  Price,
  OldPrice,
  Rating,
  AddBtn,
  Pagination,
  PPage,
  PInfo,
  StateMessage,
} from "../../styles/Shop.styles";
import { fetchProducts } from "../../features/products/productsSlice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FILTERS = ["All", "Hoodies", "Tees", "Jackets", "Accessories", "Sale"];

interface Product {
  id: number;
  emoji: string;
  category: string;
  name: string;
  price: number;
  oldPrice: number | null;
  badge: string | null;
  sizes: string[];
  soldOut: string[];
  rating: number;
  reviews: number;
  liked: boolean;
}

export default function Shop() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.products);

  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [likedItems, setLikedItems] = useState<number[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const products: Product[] = items ?? [];

  const filtered = products.filter((p) => {
    if (search && !p.name?.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (activeFilter === "All") return true;
    if (activeFilter === "Sale") return p.oldPrice !== null;
    return p.category?.includes(activeFilter.slice(0, -1));
  });

  return (
    <Page>
      <Navbar />
      <Main>
        <Breadcrumb>
          Home / <span>Shop</span>
        </Breadcrumb>

        <ShopHeader>
          <TitleWrap>
            <SLabel>season 01 / collection</SLabel>
            <H1>Shop the drop</H1>
          </TitleWrap>
          <Meta>
            <MetaCount>{filtered.length}</MetaCount>
            items available
          </Meta>
        </ShopHeader>

        <Filters>
          {FILTERS.map((f) => (
            <FilterBtn
              key={f}
              $active={activeFilter === f}
              $sale={f === "Sale"}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </FilterBtn>
          ))}
          <SearchWrap>
            <SearchIcon>⌕</SearchIcon>
            <input
              type="text"
              placeholder="Search drops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrap>
          <SortSelect>
            <option>Newest</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
            <option>Most popular</option>
          </SortSelect>
        </Filters>

        <ActiveFilters>
          <AFLabel>Active:</AFLabel>
          <AFChip>{activeFilter} ✕</AFChip>
          <AFChip>In stock ✕</AFChip>
        </ActiveFilters>

        {loading && <StateMessage>Loading drops...</StateMessage>}

        {!loading && filtered.length === 0 && (
          <StateMessage>No products found</StateMessage>
        )}

        {!loading && filtered.length > 0 && (
          <Grid>
            {filtered.map((p) => (
              <Card key={p.id}>
                <PImg>
                  <Emoji>{p.emoji}</Emoji>
                  {p.badge && (
                    <Badge $type={p.badge}>
                      {p.badge.charAt(0).toUpperCase() +
                        p.badge.slice(1).toLowerCase()}
                    </Badge>
                  )}
                  <Wish
                    $liked={likedItems.includes(p.id)}
                    onClick={() => toggleLike(p.id)}
                  >
                    {likedItems.includes(p.id) ? "♥" : "♡"}
                  </Wish>
                  <Sizes>
                    {p.sizes?.map((s) => (
                      <Size key={s} $avail>
                        {s}
                      </Size>
                    ))}
                    {p.soldOut?.map((s) => (
                      <Size key={s}>{s}</Size>
                    ))}
                  </Sizes>
                </PImg>
                <Info>
                  <Category>{p.category}</Category>
                  <PName>{p.name}</PName>
                  <Pricing>
                    <div>
                      <Price>${p.price}</Price>
                      {p.oldPrice && <OldPrice>${p.oldPrice}</OldPrice>}
                    </div>
                    <Rating>
                      {"★".repeat(p.rating)}
                      {"☆".repeat(5 - p.rating)}
                      <span>({p.reviews})</span>
                    </Rating>
                  </Pricing>
                  <AddBtn>Add to cart</AddBtn>
                </Info>
              </Card>
            ))}
          </Grid>
        )}

        <Pagination>
          <PPage>‹</PPage>
          <PPage $active>1</PPage>
          <PPage>2</PPage>
          <PPage>3</PPage>
          <PPage>...</PPage>
          <PPage>12</PPage>
          <PPage>›</PPage>
          <PInfo>{filtered.length} items</PInfo>
        </Pagination>
      </Main>
      <Footer />
    </Page>
  );
}
