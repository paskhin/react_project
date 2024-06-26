import { useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/entities/service/api";
import { Form } from "../form/component";

export function NewReviewFormContainer({ restaurantId }) {
  const [createReview] = useCreateReviewMutation();

  const handleSave = useCallback((form) => {
    createReview({
      restaurantId, newReview: {
        ...form,
        userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
      }
    })
  }, [createReview])
  return (
    <Form onSaveClick={handleSave}
    />
  )
}
