import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/images/hero.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Your best online shop destination!</h1>
        <p className={styles.description}>Discorv aworld of endless shopping possibilities at our online store. Browser, choose, and order your favorite products from the comfort of your home.</p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div>
        <Image src={Hero} className={styles.img} alt='Hexa Shop' />
      </div>
    </div>
  )
} 
