import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6443dc0d90738aa7c079400c.mockapi.io/api/';

export const getUsers = createAsyncThunk(
  'tweets/getUsers',
  async (page = 1, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users', {
        params: {
          page,
          limit: 3,
        },
      });

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'tweets/updateUser',
  async ({ id, followers }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${id}`, {
        followers,
      });

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
