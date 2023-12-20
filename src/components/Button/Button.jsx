"use client"
import style from "./Button.module.css"


export default function Button() {
  return (
    <button className={style.logout} 
    onClick={()=>{console.log("logout")}}
    >Logout
    </button>
  )
}
