import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "./slices/skillsSlice";


const store = configureStore({
    reducer: {
        skills: skillsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store