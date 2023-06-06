import { Router } from 'express'

import * as db from '../db/games'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const games = await db.getAllGames()
    res.json({ games })
  } catch (error) {
    console.log(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
