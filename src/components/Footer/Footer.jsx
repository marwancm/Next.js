import Image from "next/image"
import style from "./Footer.module.css"
import {social_media} from "./data"

export default function Footer() {
  return (
    <>
    <div className={style.container}>
      <div>&copy;2023 Hexashop. All rights reserved.</div>
      <div className={style.social}>
        {
          social_media.map(media =>
            <Image 
              key={media.id}
              src={`/images/icons/${media.name}.png`}
              width={25}
              height={25}
              className={style.icon}
              alt={`Hexashop ${media.name} link`}
            />
          )
        }
      </div>
    </div>
    </>
  )
}
