import { Text } from '@chakra-ui/react'
import { RoleOverview } from '@components/RoleTable'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '@styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image alt="CourseSync" src="/assets/hero.svg" height={300} width={1000} />
        <Text fontSize="1.75rem" textAlign='center'>
            a web application where students can upload their course syllabi.
        </Text>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          View Compensation Trends
        </h1>

        <p className={styles.description}>
          {`This is a volunteer-run, grass-roots initiative. The gender pay gap is real and while there is progress worth celebrating, it's hard to know how the Web3 industry compares against these trends. We're on a mission to make web3 compensation data more accessible to everyone`}
        </p>
        <RoleOverview />
      </main>
    </div >
  )
}

export default Home
