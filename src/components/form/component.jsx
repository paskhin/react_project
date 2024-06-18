import { useReducer } from "react"
import { Rating } from "../rating/component"
import { DEFAULT_FORM_VALUE } from "../../constans/settings";

export function reducer(state, { type, payload } = {}) {
  switch (type) {
    case 'setText':
      return { ...state, text: payload };
    case 'setRating':
      return { ...state, rating: payload };
    case 'clear':
      return { ...DEFAULT_FORM_VALUE };
    default:
      return state
  }
}

export function Form({
  initialValue = DEFAULT_FORM_VALUE,
  onSaveClick,
  onCancelClick
}) {
  const [form, dispatch] = useReducer(reducer, initialValue, ({ text, rating }) => ({ text, rating }));


  return (
    <div>
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
      <button onClick={() => onSaveClick({...initialValue, ...form}) }>Save</button>
      {onCancelClick &&
        <button onClick={onCancelClick}>Cancel</button>
      }

    </div>
  )
}
