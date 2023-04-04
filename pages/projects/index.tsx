import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { GetStaticProps } from 'next'
import type { ProjectData } from '@/types'
import { getAllProjects } from '@/helpers/api'
import Head from 'next/head'
import Projects from '@/sections/Projects'
import { Three } from '@/components'

const ProjectsPage = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <>
      <Head>
        <title>All Lockers</title>
        <meta name="description" content="Browse a huge list of Grzegorz Wolfinger portfolio projects." />
      </Head>
      <Canvas id="canvas-projects-element">
        <Html>
          <Projects projects={projects} />
        </Html>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
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
