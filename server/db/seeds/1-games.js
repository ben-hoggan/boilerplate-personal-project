exports.seed = async function (knex) {
  // Inserts seed entries
  await knex('games').insert([
    { id: 1, title: 'Pong' },
    { id: 2, title: 'Tetris' },
    { id: 3, title: 'Space Invaders' },
  ])
}
