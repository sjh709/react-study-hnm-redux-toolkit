import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  productList: [],
  productDetail: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.productDetail = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
