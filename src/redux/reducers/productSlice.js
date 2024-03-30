import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let initialState = {
  productList: [],
  productDetail: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async (searchQuery, thunkApi) => {
    try {
      // let url = `https://my-json-server.typicode.com/sjh709/react-study-hnm-redux-toolkit/products?q=${searchQuery}`;
      let url = `http://localhost:4000/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getSingleProduct(state, action) {
      state.productDetail = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
