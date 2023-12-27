import styles from './Map.module.sass'
import { useState } from 'react'
import { chinaProvinces } from '../datas/maps'

export default function Map({ selected = [] }) {
   const [pos, setPos] = useState([-100, -100])
   const [province, setProvince] = useState('')
   const handleMove = e => {
      setProvince(e.target.id)
      setPos([e.pageX + 10, e.pageY + 20])
   }

   return (
      <div className={styles.map}>
         <span className='toolTips' style={{ top: pos[1], left: pos[0] }}>{province}</span>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 -30 841.9 595.3" onMouseMove={handleMove}>
            <rect x="-10" y='440' width="150" height="80" rx="15" />
            <circle cx="10" cy="460" r="10" fill="indianred" />
            <text x='30' y='470'>去过</text>
            <circle cx="10" cy="500" r="10" fill="skyblue" />
            <text x='30' y='510'>没去过</text>
            {chinaProvinces.map(([id, d]) => <path d={d} id={id} className={selected.includes(id) ? 'selected' : ''} key={id} />)}
         </svg>
      </div>
   )
}