import type { ProjectData } from '@/types'
import { ProjectCard } from '@/components'

export type ProjectsProps = {
  projects: ProjectData[]
}

const ProjectList = ({ projects }: ProjectsProps) => {
  return (
    <>
      {projects.map((project) => {
        return <ProjectCard key={project._id} {...project} />
      })}
    </>
  )
}
export default ProjectList
