'use client'

import Image from "next/image"
import styles from './product.module.css'
import { EndpointUrls } from "@/utils/endpoint-urls"

export const Product = ({item}: any) => {

  async function handleProductAdd (event: React.MouseEvent<HTMLElement>) {
    let result;

    await fetch(`${EndpointUrls.ADD_PRODUCT}&${item.sizes[event.currentTarget.innerText].id}`, {
      method: 'POST'
    })
      .then(response => {
        if(response.status != 200) {
          throw new Error('Не удалось добавить в корзину')
        }
        return response
      })
      .then(response => response.json())
      .then(list => result = list)
      .catch(err => err.message)
    
    return result
  }

  return(
    <div className={styles.box}>
      <Image
        src={item.photos[0].big}
        alt={item.name}
        width={300}
        height={400}
        className={styles.center}
      />
      <div className={styles.center}>
        <p className={styles.text_center}>
          Добавить размер
        </p>
        <div className={styles.sizes_box}>
          <button className={styles.size} onClick={handleProductAdd}>
            25
          </button>
          <div className={styles.size}>
            26
          </div>
          <div className={styles.size}>
            27
          </div>
          <div className={styles.size}>
            28
          </div>
          <div className={styles.size}>
            29
          </div>
        </div>
      </div>
      <div>
        <p className={`${styles.text_center} ${styles.name} `}>
          {item.name}
        </p >
        <p className={styles.text_center}>
          {item.format_price[2]}
        </p>
      </div>
    </div>
  )
}