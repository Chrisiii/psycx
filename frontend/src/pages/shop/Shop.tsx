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
  const { items, loading, pagination } = useSelector(
    (state: RootState) => state.products,
  );

  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search, activeFilter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(
        fetchProducts({
          search,
          category: activeFilter,
          sale: activeFilter === "Sale",
          page,
        }),
      );
    }, 400);

    return () => clearTimeout(timeout);
  }, [search, activeFilter, page, dispatch]);

  function getPageNumbers(current: number, total: number): (number | "...")[] {
    const pages: (number | "...")[] = [];
    const range = 1;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - range && i <= current + range)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  }

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const products: Product[] = items ?? [];

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
            <MetaCount>{products.length}</MetaCount>
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

        {!loading && products.length === 0 && (
          <StateMessage>No products found</StateMessage>
        )}

        {!loading && products.length > 0 && (
          <Grid>
            {products.map((p) => (
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
          <PPage
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            style={
              page === 1 ? { pointerEvents: "none", opacity: 0.4 } : undefined
            }
          >
            ‹
          </PPage>

          {getPageNumbers(pagination.page, pagination.totalPages).map((p, i) =>
            p === "..." ? (
              <PPage key={`ellipsis-${i}`} style={{ pointerEvents: "none" }}>
                ...
              </PPage>
            ) : (
              <PPage
                key={p}
                $active={p === pagination.page}
                onClick={() => setPage(p)}
              >
                {p}
              </PPage>
            ),
          )}

          <PPage
            onClick={() =>
              setPage((p) => Math.min(pagination.totalPages, p + 1))
            }
            style={
              page === pagination.totalPages
                ? { pointerEvents: "none", opacity: 0.4 }
                : undefined
            }
          >
            ›
          </PPage>

          <PInfo>{pagination.totalItems} items</PInfo>
        </Pagination>
      </Main>
      <Footer />
    </Page>
  );
}
