export const selectUserModul = (state) =>
  state.user;

export const selectUserById = (state, id) =>
  selectUserModul(state).entities[id];

export const selectUserIds = (state) =>
  selectUserModul(state).ids;
