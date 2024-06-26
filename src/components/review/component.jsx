import { useState } from "react";
import { UpdateReviewFormContainer } from "../update-review-form-container/container";
import { Button } from "../button/component";

export function Review({ review, user }) {
  const { text, rating } = review;
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
      {isEdit ? (<UpdateReviewFormContainer review={review} />) : (
        <>
          <div><b>{user.name}</b></div>
          <span>{text}</span>
          <div>{rating}</div>
          <Button onClick={() => setIsEdit(true)}>Edit</Button>
        </>
      )
      }
    </div>

  )
}
