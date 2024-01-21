import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from  './campaigns/campaignsSlice';

const store = configureStore({
    reducer: {
        campaigns: campaignReducer,
    },
});

export default store;
