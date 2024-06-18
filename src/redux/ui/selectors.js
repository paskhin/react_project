export const selectCartModule = (state) => state.cart;
export const selectDishCount = (state, dishId) => selectCartModule(state)[dishId] || 0;

export const selectCartCount = (state) =>
  Object.values(selectCartModule(state)).reduce((sum, count) => sum + count, 0);
