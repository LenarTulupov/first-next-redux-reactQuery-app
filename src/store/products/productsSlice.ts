import { IProduct } from "@/types/product.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
