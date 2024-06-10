import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewByRestaurantId = createAsyncThunk(
  'review/getReviewByRestaurantId',
  async (restaurantId) => {
    const respons = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    return respons.json();
  }
);
