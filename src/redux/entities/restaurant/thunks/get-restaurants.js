import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  async () => {
    const respons = await fetch('http://localhost:3001/api/restaurants');
    return respons.json();
  }
);
