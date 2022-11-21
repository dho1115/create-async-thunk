import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import loremSlice from '../features/lorem/loremSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lorem: loremSlice.reducer
  },
});

// console.log(store.getState())
