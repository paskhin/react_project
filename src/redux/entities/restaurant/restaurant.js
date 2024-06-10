import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";


const entitiAdapter = createEntityAdapter();

export const RestaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entitiAdapter.getInitialState(),
  extraReducers: (builder) => builder.addCase(getRestaurants.fulfilled, (state, {payload}) => {
    entitiAdapter.setAll(state, payload);
  }),
})


