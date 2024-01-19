import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from  './campaigns/campaignSlice';

const store = configureStore({
    reducer: {
        campaigns: campaignReducer,
    },
});

export default store;
