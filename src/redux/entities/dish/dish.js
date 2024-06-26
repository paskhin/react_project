import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantIds } from "./thunks/get-dishes-by-restaurant-id";

const entitiAdapter = createEntityAdapter();

export const DishSlice = createSlice({
  name: 'dish',
  initialState: entitiAdapter.getInitialState(),
  extraReducers: (builder) => builder.addCase(getDishesByRestaurantIds.fulfilled, (state, { payload }) => {
    entitiAdapter.setMany(state, payload);
  }),
})

