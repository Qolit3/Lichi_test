import Image from "next/image"
import Link from "next/link"
import cart from "../../public/cart.png"


export const Header = () => {


  return(
    <header>
      <div>
        <div />
        <nav>
          <ul>
            <li>
              <Link href="/">
                Бренд
              </Link>
            </li>
            <li>
              <Link href="/">
                Новинки
              </Link>
            </li>
            <li>
              <Link href="/">
                Одежда
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div>
          <Image
            src={cart}
            alt="Корзина"
          />
          <span>Корзина</span>
        </div>
      </div>
    </header>
  )
}