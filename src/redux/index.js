import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./entities/user/user";
import { RestaurantSlice } from "./entities/restaurant/restaurant";
import { ReviewSlice } from "./entities/review/review";
import { DishSlice } from "./entities/dish/dish";

export const store = configureStore({
  reducer: combineSlices(UserSlice, RestaurantSlice, ReviewSlice, DishSlice),
});


