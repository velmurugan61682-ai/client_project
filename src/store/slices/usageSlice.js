import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

const API_URL = '/api/usage';

export const fetchUsages = createAsyncThunk('usage/fetchUsages', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(API_URL, config);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message || error.message);
  }
});

export const createUsage = createAsyncThunk('usage/createUsage', async (usageData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.post(API_URL, usageData, config);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message || error.message);
  }
});

const usageSlice = createSlice({
  name: 'usage',
  initialState: {
    usages: [],
    isLoading: false,
    isError: false,
    message: '',
  },
  reducers: {
    resetUsage: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsages.pending, (state) => { state.isLoading = true; })
      .addCase(fetchUsages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usages = action.payload;
      })
      .addCase(fetchUsages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createUsage.pending, (state) => { state.isLoading = true; })
      .addCase(createUsage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usages.push(action.payload);
      })
      .addCase(createUsage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetUsage } = usageSlice.actions;
export default usageSlice.reducer;
