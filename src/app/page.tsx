import { porductsId } from '@/utils/products-id'
import styles from './page.module.css'
import { EndpointUrls } from '@/utils/endpoint-urls'



export default async function Home() {
  const data = await getProducts()

  return (
    <main className={styles.main}>
      <h1>Одежда</h1>
      <nav>
        <li>Платья</li>
        <li>Блузы и Топы</li>
        <li>Комплекты</li>
        <li>Деним</li>
      </nav>
      <div>
      {data.map(item => {
        return (
          <div>
            {item.api_data.aData.article}
          </div>
        )
      })}
      </div>
    </main>
  )
}

async function getProducts () {
  let result: any[] = [];
  const requests = porductsId.map(item => {
    return fetch(`${EndpointUrls.GET_INFO}&id=${item}`)
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
    .catch(() => {throw new Error(`Не удалось получить данные о товаре`)})
  
  return result
}
