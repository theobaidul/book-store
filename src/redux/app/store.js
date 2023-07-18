import { configureStore } from '@reduxjs/toolkit';
import bookSlice from '../features/book/bookSlice';

const store = configureStore({
    reducer: {
        book: bookSlice,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
