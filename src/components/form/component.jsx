import { useReducer } from "react"
import { Rating } from "../rating/component"
import { DEFAULT_FORM_VALUE } from "../../constans/settings";
import { Button } from "../button/component";
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

export function Form() {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  return (
    <div>
      <div>
        <span>Name</span>
        <input type="text"
          value={form.name}
          onChange={(event) => { dispatch({ type: 'setName', payload: event.target.value }) }} />
      </div>
      <div>
        <span>Text</span>
        <input type="text"
          value={form.text}
          onChange={(event) => { dispatch({ type: 'setText', payload: event.target.value }) }}
        />
      </div>
      <Rating
        maxRating={5}
        onRatingClick={(grad) => { dispatch({ type: 'setRating', payload: grad }) }}
        value={form.rating}
      />
      <Button
        onClick={() => { dispatch({ type: 'setForm', payload: DEFAULT_FORM_VALUE }) }}
      >
        Сохранить
      </Button>
    </div>
  )
}
