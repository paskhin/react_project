import styles from "./styles.module.scss"
import classNames from "classnames";
import { Image } from "../../components/picture/component";
import Hero from '../../img/pictures/hero-desk.png'
import Hero2x from '../../img/pictures/hero-desk@2x.png'
export function HomePage() {
  return (
    <div className={classNames(styles.root)}>
      <Image
        width={1093}
        height={484}
        src={Hero}
        srcSet={Hero2x}
      />
      <div className={classNames(styles.root__gradient)}></div>
      <div className={classNames(styles.gradient__banner)}></div>
    </div>


  )
}

