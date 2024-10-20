import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initaialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initaialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch) {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(fetchProducts(data));
  };
}
