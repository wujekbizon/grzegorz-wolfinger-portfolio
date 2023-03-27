import { connectToDatabase, getAllDocuments } from './db'

export const getAllProjects = async () => {
  const client = await connectToDatabase('portfolio')
  const projects = await getAllDocuments(client, 'projects')
  return projects
}
