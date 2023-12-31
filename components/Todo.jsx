import styles from './Todo.module.sass'

const todos = [
  { id: 0, text: '找到工作💰💰💰' },
  { id: 1, text: '顺利毕业👩‍🎓🎓🧑‍🎓' },
  { id: 2, text: '永不分开💜💜💜' },
]

export default function Todo() {
  return (
    <div className={styles.todo}>
      <div className={styles.title}>
        <p>新年愿望</p>
      </div>
      <div className={styles.items}>
        {todos.map(todo => <Item text={todo.text} key={todo.id} />)}
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