import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./entities/user/user";
import { RestaurantSlice } from "./entities/restaurant/restaurant";
import { ReviewSlice } from "./entities/review/review";
import { DishSlice } from "./entities/dish/dish";
import { CartSlice } from "./ui/cart";
import { RequestSlice } from "./ui/request/request";
import { apiService } from "./entities/service/api";

export const store = configureStore({
  reducer: combineSlices(
    UserSlice,
    RestaurantSlice,
    ReviewSlice,
    DishSlice,
    CartSlice,
    RequestSlice,
    apiService
  ),
  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere().concat(apiService.middleware),
});


