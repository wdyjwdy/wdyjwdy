import styles from './Chat.module.sass'
import xxc from '/images/xxc.jpg'
import wj from '/images/wj.jpg'

export default function Chat({ items }) {
  return (
    <div className={styles.chat}>
      {items.map(item => <Item name={item.name} text={item.text} right={item.right} />)}
    </div>
  )
}

function Item({ name, text, right }) {
  const textColor = name === 'wj' ? '#005493' : 'palevioletred'
  const avatar = name === 'wj' ? wj.src : xxc.src

  return (
    <div className={styles.item} style={{ flexDirection: right && 'row-reverse' }}>
      <div className={styles.avatar}>
        <img src={avatar} />
      </div>
      <div className={styles.message}>
        <span style={{ alignSelf: right && 'end' }}>{ name }</span>
        <p style={{ color: textColor, alignSelf: right && 'end' }}>{ text }</p>
      </div>
    </div>
  )
}