const db = require('../data/db-config.js')

const find = () => {
   return db('resources')
}

const add = (resource) => {
   return db('resources')
      .insert(resource, 'id')
}

module.exports = {
   find,
   add
}