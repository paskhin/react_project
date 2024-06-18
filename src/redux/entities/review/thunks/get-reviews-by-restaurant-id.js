import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const getReviewByRestaurantId = createAsyncThunk(
  'review/getReviewByRestaurantId',
  async ({ restaurantId }) => {
    const respons = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    return respons.json();
  },
  {
    condition: ({ forceRefech = false, restaurantId } = {}, { getState }) => {
      if (forceRefech) {
        return true;
      }
      const state = getState();
      const loadedReviewIds = selectReviewIds(state);
      const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);

      return restaurantReviewIds.some(
        (reviewId) => !loadedReviewIds.includes(reviewId)
      )
    }
  }
);
