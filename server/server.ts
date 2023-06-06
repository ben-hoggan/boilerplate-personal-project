import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

import gamesRoutes from './routes/games'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))

server.use('/api/v1/games', gamesRoutes)

export default server
