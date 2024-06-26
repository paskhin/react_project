export const selectReviewModul = (state) =>
  state.review;

export const selectReviewById = (state, id) =>
  selectReviewModul(state).entities[id];

export const selectReviewIds = (state) =>
  selectReviewModul(state).ids;
