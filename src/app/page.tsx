'use client'

import { useState, useEffect } from 'react';
import { porductsId } from '@/utils/products-id'
import styles from './page.module.css'
import { EndpointUrls } from '@/utils/endpoint-urls'
import { Product } from '@/components/product/product'



export default async function Home() {
  const products = await getProducts()
  const [productsForRender, setProductsForRender] = useState<typeof products>(products)

  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    let setArr: typeof products = [];
    
    if(event.currentTarget.innerText === 'Всё') {
      setArr = products
    } else {
      products.forEach(item => {
        if(event.currentTarget.innerText == item.parent_category_ids[1][0].name) {
          setArr.push(item)
       }
     })
    }
    

    setProductsForRender(setArr)
  }
  console.log(products)
 
  return (
    <main className={styles.main}>
      <h1>Одежда</h1>
      <nav className={styles.categories}>
        <li className={styles.category} onClick={handleCategoryClick}>Всё</li>
        <li className={styles.category} onClick={handleCategoryClick}>Платья</li>
        <li className={styles.category} onClick={handleCategoryClick}>Блузы и Топы</li>
        <li className={styles.category} onClick={handleCategoryClick}>Комплекты</li>
        <li className={styles.category} onClick={handleCategoryClick}>Деним</li>
      </nav>
      <div className={styles.products_grid}>
        {productsForRender.map(item => {
          return <Product item={item.api_data.aData} />
        })}
      </div>
    </main>
  )
}

async function getProducts () {
  let result: any[] = [];
  const requests = porductsId.map(item => {
    return fetch(`${EndpointUrls.GET_INFO}&id=${item}`, {
      method: 'POST'
    })
  })

  await Promise.all(requests)
    .then(responses => {
      for(let response of responses) {
        if(response.status != 200) {
          throw new Error(`Не удалось получить данные о товаре`)
        }
      }
      return responses
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(products => result = products)
    .catch(err => {throw new Error(err.message)})
  
  return result
}