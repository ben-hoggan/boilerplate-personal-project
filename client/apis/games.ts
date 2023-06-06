import request from 'superagent'
import { Game } from '../../models/game'

const rootUrl = '/api/v1'

export async function getGames(): Promise<Game[]> {
  const response = await request.get(rootUrl + '/games')
  return response.body.games
}
