import Image from "next/image"
import Link from "next/link"
import cart from "../../../public/cart.png"
import styles from "./header.module.css"


export const Header = () => {


  return(
    <header className={styles.header}>
      <div>
        <nav>
          <ul className={styles.nav}>
            <li className={`${styles.left_nav_li} ${styles.logo}`} key={1}>
              <Link href="/">
                Бренд
              </Link>
            </li>
            <li className={styles.left_nav_li} key={3}>
              <Link href="/">
                Одежда
              </Link>
            </li>
            <li className={styles.left_nav_li} key={3}>
              <Link href="/">
                Тоже одежда
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.nav}>
        <div className={styles.right_nav_box}>
          <Image
            src={cart}
            alt="Корзина"
            width={35}
          />
          <span className={styles.right_nav_box_text}>Корзина</span>
        </div>
      </div>
    </header>
  )
}