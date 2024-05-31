import { useReducer } from "react"
import { Rating } from "../rating/component"
import { reducer } from "../../hooks/reducer";
import { DEFAULT_FORM_VALUE } from "../../constans/settings";


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
      <Rating onRatingClick={(grad) => { dispatch({ type: 'setRating', payload: grad }) }} />
      <button
        onClick={() => { dispatch({ type: 'setForm', payload: DEFAULT_FORM_VALUE }) }}
      >
        Сохранить
      </button>
    </div>
  )
}
