import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
