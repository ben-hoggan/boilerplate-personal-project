import { useEffect, useState } from "react"

import { Game } from '../../models/game'
import * as api from '../apis/games'

function App() {
  const [games, setGames] = useState([] as Game[])
  
  useEffect(() => {
    async function fetchGames() {
      try {
        const fetchedGames = await api.getGames()
        setGames(fetchedGames)
      } catch(error) {
        console.log(error)
      }
    }
    fetchGames()
  }, [])

  return (
    <div>
      <h1>React and Knex Boilerplate</h1>
      <h2>Games</h2>
        <ul>
          {
            games.map((game) => {
              return (
                <li key={game.id}>{game.title}</li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default App
