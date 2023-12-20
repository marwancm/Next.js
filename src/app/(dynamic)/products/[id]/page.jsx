import style from './page.module.css'
import Image from 'next/image'


export async function generateMetadata({params}) {
  const product = await getData(params.id)
  return{
    title: `product - ${product.title}`,
    description: product.description
  }
}

async function getData(id){
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Post({params}) {
  const product = await getData(params.id)

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.info}>
          <h1 className={style.title}>{product.title}</h1>
          <p className={style.desc}>{product.description}</p>
        </div>
        <div className={style.imageContainer}>
          <Image
            className={style.postImage}
            src={product.thumbnail}
            alt='category product'
            fill={true}
          />
          <span className={style.author}>{product.category}</span>
        </div>
      </header>
      <div className={style.content}>
        <div className={style.gallery}>
          {
            product.images.map(image =>(
              <Image
                key={product.id}
                src={image}
                width={200}
                height={200}
                alt={product.title}
            />
            )
            )}
        </div>
        <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eligendi eum sed, explicabo debitis facere id veniam rerum. Sequi ad culpa velit ex praesentium corrupti quasi numquam! Beatae sequi ipsum, unde, reiciendis vitae quidem odio ducimus rem suscipit praesentium officiis, ea dolore explicabo inventore alias quasi corrupti nemo itaque molestias facere! Iste accusantium, commodi omnis animi numquam laudantium laborum minus in, qui quia excepturi. Dolor aspernatur quae expedita, laudantium earum magnam delectus, temporibus itaque praesentium iusto dolores! Error, deserunt illo repellendus reprehenderit aliquam soluta ab voluptatem beatae nihil illum qui corrupti exercitationem assumenda cupiditate suscipit mollitia id adipisci possimus numquam.</p>
      </div>
    </div>
  )
}
