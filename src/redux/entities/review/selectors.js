export const selectReviewModul = (state) =>
  state.review;

export const selectReviewById = (state, id) =>
  selectReviewModul(state).entities[id];

export const selectRevuewIds = (state) =>
  selectReviewModul(state).ids;
