import styles from "./styles.module.scss"
import classNames from "classnames";

export function Contacts() {
  return (
    <div className={classNames(styles.root)}>
      <h2>КОНТАКТЫ</h2>
      <div>
        <div className={classNames(styles.address)}>
          <h3>Наш адрес:</h3>
          <p>
            МО, городской округ Красногорск, село Ильинкое,
            Экспериментальная улица, 10</p>
        </div>
        <div>
          <h3>Наша почта:</h3>
          <a href="#">auto.wash@gmail.com</a>
        </div>
      </div>
      <div className={classNames(styles.orderContainer)}>
        <a href="#" className={classNames(styles.orderLink)}>СДЕЛАТЬ ЗАКАЗ</a>
        <a className={classNames(styles.telNumber)} href="#">+7 (917) 510-57-59</a>
        <p className={classNames(styles.orderText)}>Звоните или оставляйте заявку</p>
      </div>
      <div className={classNames(styles.social)}>
        <h3>Мы в соц сетях:</h3>
        <ul>
          <li><a href="#">facebook</a></li>
          <li><a href="#">vk</a></li>
          <li><a href="#">youtube</a></li>
          <li><a href="#">instagram</a></li>
        </ul>
      </div>
    </div>
  )
}
