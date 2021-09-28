import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  value: {
    'USD / ILS': {
      currencyName: 'USD / ILS',
      picked: false,
    },
    'EUR / USD': {
      currencyName: 'EUR / USD',
      picked: false,
    },
    'USD / JPY': {
      currencyName: 'USD / JPY',
      picked: false,
    },
  },
};

export const currencyReducer = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    picked: (state, action) => {
      console.log('payload', action.payload);
      state.value[action.payload.name].picked = true;
      console.log('state', current(state));
    },
    unpicked: (state) => {
      state.picked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { picked, unpicked } = currencyReducer.actions;

export default currencyReducer.reducer;
