import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Learning } from '@/sections'
import type { QuestionCardInterface } from '@/types'
import { questions } from '@/data/questions'

const LearnPage = ({ questions }: { questions: QuestionCardInterface[] }) => {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Wolfinger Enterprise Solutions Architects - WESA E-Learning Platform 2023" />
      </Head>
      <Learning questions={questions} />
    </>
  )
}
export default LearnPage

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      questions,
    },
    revalidate: 1800,
  }
}
