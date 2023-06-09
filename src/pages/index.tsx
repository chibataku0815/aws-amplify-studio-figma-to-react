import styles from '@/styles/Home.module.css'
import { ActionCard, HeroLayout1 } from '@/ui-components'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroLayout1 />
      <main className={`${styles.main} ${inter.className}`}>
        <ActionCard />
      </main>
    </>
  )
}
