import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "../services/cryproNewsApi";
import { cryptoApi } from '../services/cryptoApi'; 
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
});