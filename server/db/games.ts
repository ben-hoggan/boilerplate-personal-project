import connection from './connection'
import { Game } from '../../models/game'

export async function getAllGames(db = connection): Promise<Game[]> {
  const games = await db('games').select()
  return games
}
