import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";

const entitiAdapter = createEntityAdapter();

export const ReviewSlice = createSlice({
  name: 'review',
  initialState: entitiAdapter.getInitialState(),
  extraReducers: (builder) => builder.addCase(getReviewByRestaurantId.fulfilled, (state, {payload}) => {
    entitiAdapter.setAll(state, payload);
  }),
})

