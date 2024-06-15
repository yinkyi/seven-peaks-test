import { createSlice } from '@reduxjs/toolkit';

export interface IinitialState {
  auth: {
    isAuth: boolean;
    name: string;
  };
}

const initialState: IinitialState['auth'] = {
  isAuth: false,
  name: 'Yin Yin',
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state: IinitialState['auth'], action) {
      state.isAuth = action.payload.isAuth;
      state.name = action.payload.name;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
