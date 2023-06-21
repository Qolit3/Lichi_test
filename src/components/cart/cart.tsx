import Link from "next/link"

export const Cart = (list: any) => {
  
  return(
    <div>
      <h2>Корзина</h2>
      <div>

      </div>
      <p>Общая сумма:</p>
      <Link href="/">Оформить</Link>
    </div>
  )
}