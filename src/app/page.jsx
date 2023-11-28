import Image from 'next/image'
import styles from './page.module.css'
import Todo from '@/components/Todo'

export default function Home() {
  return (
   <div className={styles.container}>
    <Todo />
   </div>
  )
}
