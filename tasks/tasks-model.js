const db = require('../data/db-config.js')

const find = (id) => {
   return db('tasks')
      .join('projects', 'tasks.project_id', 'projects.id' )
      .select('project.name', 'project.description', 'tasks.id', 'tasks.description')
      .where({ 'tasks.id': id })
}

const add = (task) => {
   return db('tasks')
      .insert(task, 'id')
}

module.exports = {
   find,
   add
}