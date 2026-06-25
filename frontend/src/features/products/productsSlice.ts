import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductsState {
  items: any[];
  loading: boolean;
  error: string | null;
}

interface ProductFilters {
  search: string;
  category: string;
  sale: boolean;
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

    const res = await axios.get(`http://localhost:3001/api/products?${params}`);
    return res.data.items;
  },
);

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
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
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
