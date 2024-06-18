import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITest } from '../interface';

const initialState: ITest = {
  test: 'test',
};
const testSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    test(state, action: PayloadAction<ITest>) {},
  },
});

export const testAction = testSlice.actions;
export default testSlice.reducer;
