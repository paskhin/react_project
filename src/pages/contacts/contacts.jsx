import { Image } from "../../components/picture/component"
import Map from "../../img/pictures/map.png"
import Map2x from "../../img/pictures/map@2x.png"
import  styles from "./styles.module.scss"
import classNames from "classnames";
import { Contacts } from "../../components/contacts-info/component";
export function ContactsPage() {
  return (
    <div className={classNames(styles.root)}>
      <h1 className="visually-hidden">Contacts Page</h1>
      <div>
        <Image
          width={1439}
          height={665}
          src={Map}
          srcSet={Map2x}
        />
      </div>
      <Contacts className={classNames(styles.contactsPosition)}/>
    </div>


  )
}
