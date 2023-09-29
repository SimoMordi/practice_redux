import { createSlice } from "@reduxjs/toolkit";




const stringSlice =  createSlice({
    name: "stringChanger",
    initialState: "",
    reducers: {
        showNewstring: (state) => !state ? "Akshat What" : ""
    }
})


export const {showNewstring}  = stringSlice.actions;
export default stringSlice.reducer;