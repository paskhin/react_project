import { useState } from "react";
import { UpdateReviewFormContainer } from "../update-review-form-container/container";
import { Button } from "../button/component";
import styles from "./styles.module.scss"
import classNames from "classnames";
export function Review({ review, user }) {
  const { text, rating } = review;
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className={classNames(styles.root)}>
      {isEdit ? (<UpdateReviewFormContainer review={review} />) : (
        <>
          <h3>{user.name}</h3>
          <span className={classNames(styles.text)}>{text}</span>
          <div className={classNames(styles.rating)}><b>{rating}</b></div>
          <Button onClick={() => setIsEdit(true)}>Edit</Button>
        </>
      )
      }
    </div>

  )
}
