export const selectRestaurantModul = (state) =>
  state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModul(state).entities[id];

export const selectRestayrantIds = (state) =>
  selectRestaurantModul(state).ids;
