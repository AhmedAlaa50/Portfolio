import { configureStore } from '@reduxjs/toolkit';
import currentSectionReducer from './currentSectionSlice';

export const store = configureStore({
    reducer: {
        currentSection: currentSectionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
