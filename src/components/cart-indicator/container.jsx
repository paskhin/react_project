import { useDispatch, useSelector } from "react-redux";
import { CartIndicator } from "./component";
import { selectCartCount } from "../../redux/ui/selectors";
import { clear } from "../../redux/ui/cart";

export function ContainerCartIndicator () {
  const dispatch = useDispatch();
  const handleClearClick = () => {
    dispatch(clear())
  }
  const count = useSelector(selectCartCount)
  return <CartIndicator count={count} onClearClick={handleClearClick}/>
}
