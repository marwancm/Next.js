"use client"
import style from './DarkMoodToggle.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function DarkMoodToggle() {
  const {mode, toggle} = useContext(ThemeContext)
  return (
    <div className={style.container} onClick={toggle}>
      <div className={style.icon}>🌙</div>
      <div className={style.icon}>🌚</div>
      <div 
      className={style.switcher} 
      style={mode === "light" ? {left: "2px"} : {right: "2px"}}
      />
    </div>
  )
}
