import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',

  reducers: {
    filterTweets(_, action) {
      return action.payload;
    },
  },
});

export const { filterTweets } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
