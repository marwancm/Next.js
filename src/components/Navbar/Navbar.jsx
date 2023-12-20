import Link from "next/link";
import style from "./Navbar.module.css"
import { links } from "./data";
import Button from "../Button/Button";
import DarkMoodToggle from "../DarkMoodToggle/DarkMoodToggle";

export default function Navbar() {
  return (
    <>
    <div className={style.container}>
      <Link href="/" className={style.logo}>HOXSASHOP</Link>
      <div className={style.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={style.link}>{link.title}
        </Link>
        ))}
        <DarkMoodToggle />
      </div>
      <Button />
    </div>
    </>
  )
}
