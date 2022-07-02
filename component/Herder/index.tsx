import React from 'react'
import style from './Herder.module.scss'
type Props = {}

const Herder = (props: Props) => {
  return (
  
        <div>
            <ul  className={style.menu}>
                <li><a href="" className={style.menu__link}>menu 1</a></li>
                <li><a href="" className={style.menu__link}>menu 2</a></li>
                <li><a href="" className={style.menu__link}>menu 3</a></li>
                <li><a href="" className={style.menu__link}>menu 4</a></li>
            </ul>
        </div>

  )
}

export default Herder