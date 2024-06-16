import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct, IProductData } from '../interface';

const initialState: IProductData = {
  products: [],
};
const productSlicer = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addProduct(state: IProductData, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
      console.log('product', state.products);
    },
  },
});

export const productAction = productSlicer.actions;
export default productSlicer.reducer;
