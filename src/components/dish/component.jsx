import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../counter/component"
import { selectDishCount } from "../../redux/ui/selectors";
import { decrement, increment } from "../../redux/ui/cart";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss"
import classNames from "classnames";


export function Dish({ dish }) {
  const { id } = dish;
  const { price, name, ingredients, img } = dish;

  const count = useSelector((state) => selectDishCount(state, id))
  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    () => dispatch(increment(id)),
    [id]
  );
  const handleDecrement = useCallback(
    () => dispatch(decrement(id)),
    [id]
  );

  const ucFirst = (arr) => {
    const str = arr.join(', ');
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div className={classNames(styles.root)}>
      <Link to={`/dish/${id}`}>
        <div className={classNames(styles.imageContainer)}>
          <img src={img} alt="" />
        </div>
        <h3>{name}</h3>
      </Link>
      <div className={classNames(styles.dishTextContainer)}>
        <p className={classNames(styles.ingredients)}>{ucFirst(ingredients)}</p>
        <div className={classNames(styles.price)}>
          <span>{price}</span> <span className={classNames(styles.rouble)}>R</span>
        </div>
        <div className={classNames(styles.counter)}>
          <Counter
            value={count}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
          <div className={classNames(styles.totalContainer)}>
            <span className={classNames(styles.total)}>
              {count * price}
            </span> <span className={classNames(styles.rouble)}>R</span>
          </div>
        </div>
      </div>
    </div>
  )
}

