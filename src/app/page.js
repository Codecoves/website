import Image from 'next/image'
import styles from './page.module.css'

import logo from '@/assets/Codecoves-logo.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={logo} alt="Codecoves Logo" priority />
      <h1>Coming soon!</h1>
    </main>
  )
}
