import { createSlice } from '@reduxjs/toolkit';
import { getUsers, updateUser } from './operations';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    users: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    addPage(state, { payload }) {
      state.page = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.users =
          state.page === 1
            ? (state.users = payload)
            : (state.users = [...state.users, ...payload]);
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateUser.pending, state => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.users = state.users.map(user => {
          if (user.id === payload.id) {
            return {
              ...user,
              followers: payload.followers,
            };
          }

          return user;
        });
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const tweetsReducer = tweetsSlice.reducer;
export const { addPage } = tweetsSlice.actions;
