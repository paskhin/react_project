export const selectRestaurantModul = (state) =>
  state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModul(state).entities[id];

export const selectRestaurantDishIds = (state, id) =>
  selectRestaurantById(state, id)?.menu;

export const selectRestaurantReviewIds = (state, id) =>
  selectRestaurantById(state, id)?.reviews;

export const selectRestaurantIds = (state) =>
  selectRestaurantModul(state).ids;
