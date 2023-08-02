
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

const store = configureStore({
    reducer: {
        themeReducer: themeReducer, 
        userReducer: userReducer
    }
})


type RootState = ReturnType< typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;