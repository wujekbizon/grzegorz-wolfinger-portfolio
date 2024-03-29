import { MongoClient, ObjectId } from 'mongodb'
import { ProjectData } from '@/types'

type FilteredDocument<Document> = {
  [key: string]: Document | string | number | Date | ObjectId
}

export const connectToDatabase = async (dbName: string) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.knuso.mongodb.net/${dbName}?retryWrites=true&w=majority`
  )
  return client
}

export const findOneDocument = async (
  client: MongoClient,
  collection: string,
  filter: FilteredDocument<ProjectData>
) => {
  const db = client.db()
  const result = await db.collection(collection).findOne(filter)
  return result
}

export const findOneAndDelete = async (
  client: MongoClient,
  collection: string,
  filter: FilteredDocument<ProjectData>
) => {
  const db = client.db()
  const result = await db.collection(collection).findOneAndDelete(filter)
  return result
}

export const insertOneDocument = async (
  client: MongoClient,
  collection: string,
  document: FilteredDocument<ProjectData | string>
) => {
  const db = client.db()
  const result = await db.collection(collection).insertOne(document)
  return result
}

export const getAllDocuments = async (client: MongoClient, collection: string) => {
  const db = client.db()
  const lockersArray = await db.collection(collection).find().toArray()
  return lockersArray
}
