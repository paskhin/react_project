import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantDishIds } from "../../restaurant/selectors";

export const getDishesByRestaurantIds = createAsyncThunk(
  'dish/getDishesByRestaurantIds',
  async ({ restaurantId }) => {
    const respons = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    return respons.json();
  },
  {
    condition: ({ forceRefech = false, restaurantId } = {}, { getState }) => {
      if (forceRefech) {
        return true;
      }
      const state = getState();
      const loadedDishIds = selectDishIds(state);
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);

      return restaurantDishIds.some(
        (dishId) => !loadedDishIds.includes(dishId)
      )
    }
  }
);
