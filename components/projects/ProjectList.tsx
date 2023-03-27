import type { ProjectData } from '@/types'
import { ProjectCard } from '@/components'

type ProjectsProps = {
  projects: ProjectData[]
}

const ProjectList = ({ projects }: ProjectsProps) => {
  return (
    <ul>
      {projects.map((project) => {
        return <ProjectCard key={project._id} {...project} />
      })}
    </ul>
  )
}
export default ProjectList
