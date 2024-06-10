import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./thunks/get-dishes-by-restaurant-id";

const entitiAdapter = createEntityAdapter();

export const DishSlice = createSlice({
  name: 'dish',
  initialState: entitiAdapter.getInitialState(),
  extraReducers: (builder) => builder.addCase(getDishesByRestaurantId.fulfilled, (state, {payload}) => {
    entitiAdapter.setAll(state, payload);
  }),
})

