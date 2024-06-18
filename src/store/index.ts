import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import productReducer from './product';
import testReducer from './test';
const store = configureStore({
  reducer: {
    auth: authReducer,
    item: productReducer,
    test: testReducer,
  },
});

export default store;
