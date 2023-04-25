import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.tweets.users;
export const selectPage = state => state.tweets.page;
export const selectLoading = state => state.tweets.loading;
export const selectFilter = state => state.filter;

export const filteredTweets = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    switch (filter) {
      case 'follow':
        return users.filter(user => localStorage.getItem(user.id) === 'false');

      case 'following':
        return users.filter(user => localStorage.getItem(user.id) === 'true');

      case 'all':
        return users;

      default:
        console.log('ups');
    }
  }
);
