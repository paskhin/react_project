export const selectDishModul = (state) => state.dish;

export const selectDishById = (state, id) => selectDishModul(state).entities[id];

export const selectDishIds = (state) => selectDishModul(state).ids;

