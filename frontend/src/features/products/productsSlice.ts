import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductsState {
  items: any[];
  loading: boolean;
  error: string | null;
  pagination: Pagination;
}

interface ProductFilters {
  search: string;
  category: string;
  sale: boolean;
  page?: number;
  limit?: number;
}

interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (filters: ProductFilters) => {
    const params = new URLSearchParams();
    if (filters.search) params.set("search", filters.search);
    if (filters.category && filters.category !== "All") {
      params.set("category", filters.category);
    }
    if (filters.sale) params.set("sale", "true");
    params.set("page", String(filters.page ?? 1));
    params.set("limit", String(filters.limit ?? 12));

    const res = await axios.get(`http://localhost:3001/api/products?${params}`);
    return res.data as { items: any[]; pagination: Pagination };
  },
);

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  pagination: { page: 1, limit: 12, totalItems: 0, totalPages: 0 },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
