"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface themeType {
    theme: string
    benz: string
}

const initialState: themeType = {
    theme : "light",
    benz: "benz",
    
}

const themeReducer = createSlice({
    name: "theme",
    initialState, 
    reducers: {
        onThemeChange: (state, action: PayloadAction<string>) =>{
            state.theme = action.payload
        } 
    
    }
})



export const { onThemeChange } = themeReducer.actions

export default themeReducer.reducer;