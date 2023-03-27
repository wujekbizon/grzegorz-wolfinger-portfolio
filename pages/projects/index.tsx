import { GetStaticProps } from 'next'
import type { ProjectData } from '@/types'
import { getAllProjects } from '@/helpers/api'
import { ProjectList } from '@/components'
import Head from 'next/head'

const ProjectsPage = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <>
      <Head>
        <title>All Lockers</title>
        <meta name="description" content="Browse a huge list of Grzegorz Wolfinger portfolio projects." />
      </Head>
      <ProjectList projects={projects} />
    </>
  )
}
export default ProjectsPage

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = await getAllProjects()

  return {
    props: {
      projects: allProjects.map((project) => ({
        ...project,
        _id: project._id.toString()
      }))
    },
    revalidate: 1800
  }
}
