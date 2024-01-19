import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  status: 'idle',
  loading: false,
};

export const fetchCampaign = createAsyncThunk(
  'campaigns/fetchCampaign',
    async () => {
      try {
        const response = await axios.get('https://www.plugco.in/public/take_home_sample_feed');
        console.log(response.data);
        return response.data;
      } catch (error) {
          throw new error('Failed to fetch campaign data');
      }
  },
);

const campaignSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaign.pending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addCase(fetchCampaign.fulfilled, (state) => ({
        ...state,
        status: 'succeeded',
        error: null,
      }))
      .addCase(fetchCampaign.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default campaignSlice.reducer;