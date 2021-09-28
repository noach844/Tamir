import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  0: {
    currencyPair: null,
  },
  1: {
    currencyPair: null,
  },
  2: {
    currencyPair: null,
  },
};

export const itemsReducer = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      let { id, name } = action.payload;
      state[id].currencyPair = name;
    },
    unSetCurrency: (state, action) => {
      let { id } = action.payload;
      state[id].currencyPair = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrency, unSetCurrency } = itemsReducer.actions;

export default itemsReducer.reducer;
