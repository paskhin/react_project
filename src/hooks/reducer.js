export function reducer(state, { type, payload } = {}) {
  switch (type) {
    case 'setName':
      return { ...state, name: payload };
    case 'setText':
      return { ...state, text: payload };
    case 'setRating':
      return { ...state, rating: payload };
    case 'setForm':
      return {
        ...state,
        rating: payload.rating,
        text: payload.text,
        name: payload.name
      };
    default:
      return state
  }
}
