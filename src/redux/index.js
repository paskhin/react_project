import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./entities/user";
import { RestaurantSlice } from "./entities/restaurant";
import { ReviewSlice } from "./entities/review";
import { DishSlice } from "./entities/dish";

export const store = configureStore({
  reducer: combineSlices(UserSlice, RestaurantSlice, ReviewSlice, DishSlice),
});


