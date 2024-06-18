import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  async () => {
    const respons = await fetch('http://localhost:3001/api/restaurants');
    return respons.json();
  },
  {
    condition: ({forceRefech = false} = {}, {getState}) =>
      forceRefech || !selectRestaurantIds(getState()).length,
  }
);
