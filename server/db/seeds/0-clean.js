exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('games').del()
}
