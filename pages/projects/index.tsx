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
        <Suspense fallback={null}>
          <Three projects={projects} />
        </Suspense>
        <Html>{/* <Projects projects={projects} /> */}</Html>
      </Canvas>
    </>
  )
}
export default ProjectsPage

export const getStaticProps: GetStaticProps = async () => {
  // const allProjects = await getAllProjects()

  const generateRandomColor = () => {
    return Math.random() * 0xffffff
  }

  const allProjects = [
    { _id: 'dasdas', x: 5, y: -6, z: -4, color: generateRandomColor() },
    { _id: 'addasdaxxs', x: -5, y: 6, z: 4, color: generateRandomColor() },
    { _id: 'rerrre' }
  ]

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
