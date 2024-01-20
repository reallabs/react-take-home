import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCampaign = createAsyncThunk(
  'campaigns/fetchCampaign',
  async () => {
    try {
      const response = await fetch('https://www.plugco.in/public/take_home_sample_feed');

      if (response.status !== 200) {
        throw new Error(`Failed to fetch campaign data. Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      console.error('Error fetching campaign data:', error);
      throw error; // rethrow the error to be caught in the rejected case
    }
    // } catch (error) {
    //   return null;
    // }
  },
);
fetchCampaign();


const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState: {
    campaigns: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCampaigns: (state, action) => {
      state.campaigns = action.payload;
    }
    },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaign.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaign.fulfilled, (state, action) => {
        console.log('Fulfilled Payload:', action.payload);
        state.loading = false;
        state.campaigns = action.payload;
      })
      .addCase(fetchCampaign.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default campaignsSlice.reducer;