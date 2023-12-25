import styles from './Map.module.css'
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
         <span style={{ top: pos[1], left: pos[0] }}>{province}</span>
         <p>一起去过的地方</p>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 0 841.9 595.3" onMouseMove={handleMove}>
            {chinaProvinces.map(([id, d]) => <path d={d} id={id} className={selected.includes(id) ? 'selected' : ''} key={id} />)}
         </svg>
      </div>
   )
}