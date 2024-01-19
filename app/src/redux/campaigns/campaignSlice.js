import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCampaign = createAsyncThunk(
  'campaigns/fetchCampaign',
  async () => {
    try {
      const response = await fetch('https://www.plugco.in/public/take_home_sample_feed');
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  },
);
fetchCampaign();


const campaignSlice = createSlice({
  name: 'campaigns',
  initialState: {
    campaigns: [],
  },
  reducers: {
    setCampaigns: (state, action) => action.payload,
    },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaign.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaign.fulfilled, (state, action) => {
        state.loading = false;
        state.campaigns = action.payload;
      })
      .addCase(fetchCampaign.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default campaignSlice.reducer;