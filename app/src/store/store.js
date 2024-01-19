import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from  './campaigns/campaignSlice';
// import campaignSlice from "./campaigns/campaignSlice";

const store = configureStore({
    reducer: {
        campaigns: campaignReducer,
    },
});

export default store;
