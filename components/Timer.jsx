import styles from './Timer.module.css'

export default function Timer() {
  const time = getTimeSpan()

  return (
    <div className={styles.timer}>
      <p>在一起</p>
      <p>{ time }</p>
      <p>天</p>
    </div>
  )
}

function getTimeSpan() {
  const past = new Date('2022/10/17').getTime()
  const now = new Date().getTime()
  const secondSpan = now - past
  const daySpan = Math.floor(secondSpan / 24 / 3600 / 1000)
  return daySpan
}