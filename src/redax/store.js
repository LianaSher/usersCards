import { configureStore } from '@reduxjs/toolkit';

import { tweetsReducer } from '../redax/tweetsSlise';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});
