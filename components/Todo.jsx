import styles from './Todo.module.sass'
import { todoItems } from '../constants/datas'

export default function Todo() {
  return (
    <div className={styles.todo}>
      <div className={styles.title}>
        <p>新年愿望</p>
      </div>
      <div className={styles.items}>
        {todoItems.map(todo => <Item text={todo.text} key={todo.id} />)}
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