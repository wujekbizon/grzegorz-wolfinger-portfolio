import { NextApiRequest, NextApiResponse } from 'next'
import { insertOneDocument, connectToDatabase } from '@/helpers/db'
import type { InputValues } from '@/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { selectedOption1, selectedOption2, selectedOption3, selectedOption4, selectedOption5 }: InputValues =
      req.body.survey

    // validate fields
    if (!selectedOption1 || !selectedOption2 || !selectedOption3 || !selectedOption4 || !selectedOption5) {
      res.status(422).json({
        message: 'Invalid inputs - Please choice options and try again! ',
      })
      return
    }

    const newSurvey = {
      question1: selectedOption1,
      question2: selectedOption2,
      question3: selectedOption3,
      question4: selectedOption4,
      question5: selectedOption5,
    }

    let client

    try {
      client = await connectToDatabase('wesa-platform')
    } catch (error) {
      res.status(500).json({ message: 'Connecting to database failed!' })
      return
    }

    try {
      await insertOneDocument(client, 'survey', newSurvey)
      res.status(201).json({ message: 'Ankieta wysłana!' })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      } else {
        console.log(error)
      }
    }
  }
}

export default handler
