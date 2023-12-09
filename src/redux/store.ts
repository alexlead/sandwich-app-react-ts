import { configureStore } from "@reduxjs/toolkit"
import sandwichSlice from "./sandwich/sandwichSlice";

export const store = configureStore({
    reducer: {
        sandwich: sandwichSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch