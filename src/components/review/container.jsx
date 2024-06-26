import { useGetUsersQuery } from "../../redux/entities/service/api";
import { selectEntityFromResult } from "../../redux/entities/service/selectors";
import { Review } from "./component";

export function ReviewContainer({ review }) {

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: selectEntityFromResult(review.userId)
  });

  if (!user) {
    return
  }
  if (!review) {
    return null
  }
  return <Review review={review} user={user} />
}
