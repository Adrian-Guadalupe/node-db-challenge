const db = require('../data/db-config.js')

const find = () => {
   return db('projects')
}

const add = (project) => {
   return db('projects')
      .insert(project, 'id')
}

module.exports = {
   find,
   add
}