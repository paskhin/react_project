import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishesByRestaurantId = createAsyncThunk(
  'dish/getDishesByRestaurantId',
  async (restaurantId) => {
    const respons = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    return respons.json();
  }
);
