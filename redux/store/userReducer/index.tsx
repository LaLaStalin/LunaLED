"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserType {
  name: string;
  surname: string;
  age: string;
  baby: string[];
}

interface nameType {
  name: string;
  surname: string;
}

const initialState: UserType = {
  name: "Nattida",
  surname: "Jangpipatnavakij",
  age: "20",
  baby: ["A"],
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    onNameChange: (state, action: PayloadAction<nameType>) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
    },
    onAgeChange: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    onAddBaby: (state, action: PayloadAction<string>) => {
      let addNewBaby = state.baby;
      addNewBaby.push(action.payload);
      state.baby = addNewBaby;
    },
    killingBaby: (state, action: PayloadAction<string>) => {
      const babyList = state.baby;
      let index = babyList.indexOf(action.payload);
      if (index >= 0) {
        babyList.splice(index, 1);
        state.baby = babyList;
      }
      console.log(index);
    },
  },
});

export const { onNameChange, onAgeChange, onAddBaby, killingBaby } =
  userReducer.actions;

export default userReducer.reducer;
