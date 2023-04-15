import { GetStaticProps } from 'next'
import type { ProjectData } from '@/types'
import { getAllProjects } from '@/helpers/api'
import Head from 'next/head'
import Projects from '@/sections/Projects'

const ProjectsPage = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Browse a huge list of Grzegorz Wolfinger portfolio projects." />
      </Head>

      <Projects projects={projects} />
    </>
  )
}
export default ProjectsPage

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = await getAllProjects()

  return {
    props: {
      projects: allProjects?.map((project) => ({
        ...project,
        _id: project._id.toString()
      }))
    },
    revalidate: 1800
  }
}
