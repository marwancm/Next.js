import Link from 'next/link'
import style from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Hexashop - Products",
  description: "Discorv aworld of endless shopping possibilities at our online store. Browser, choose, and order your favorite products from the comfort of your home.",
};


async function getData(){
  const res = await fetch('https://dummyjson.com/products')
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Products() {
  const data = await getData()
  const products = data.products
  return (
    <div className={style.container}>
      {
        products.map(product => (
          <Link href={`products/${product.id}`} className={style.box} key={product.id}>
            <div className={style.imageContainer}>
              <Image
                className={style.image}
                src={product.thumbnail}
                fill={true}
                alt='image product'
              />
            </div>
            <div className={style.content}>
              <h3 className={style.title}>{product.title}</h3>
              <p className={style.desc}>{product.description}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
