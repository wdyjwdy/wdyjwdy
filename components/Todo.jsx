import styles from './Todo.module.sass'

export default function Todo({ items }) {
  return (
    <div className={styles.todo}>
      <div className={styles.title}>
        <p>Todo</p>
      </div>
      <div className={styles.items}>
        {items.map(item => <Item text={item.text} key={item.id} />)}
      </div>
    </div>
  )
}

function Item({ text, icon='◎' }) {
  return (
    <p>
      <span>{icon}</span>
      {text}
    </p>
  )
}