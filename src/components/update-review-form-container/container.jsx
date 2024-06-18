import { useCallback, useMemo } from "react";
import { useUpdateReviewMutation } from "../../redux/entities/service/api";
import { Form } from "../form/component";

export function UpdateReviewFormContainer({ review, onSave, onCancel }) {
  const [updateReview] = useUpdateReviewMutation();
  const {text, rating} = review;

  const formValue = useMemo(
    () => ({
      text,
      rating
    }), [text, rating]
  );

  const handleSave = useCallback((form) => {
    updateReview({
      ...review,
      ...form
    });
    onSave();
  }, [updateReview, review, onSave])

  return (
    <Form
    onSaveClick={handleSave}
    initialValue={formValue}
    onCancelClick={onCancel}
    />
  )
}
