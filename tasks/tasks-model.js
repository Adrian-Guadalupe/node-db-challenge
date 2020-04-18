const db = require('../data/db-config.js')

const find = () => {
   return db('tasks')
      // .select('project.name', 'project.description', 'tasks.id', 'tasks.description')
      // .join('projects', 'tasks.project_id', 'projects.id' )
}

const add = (task) => {
   return db('tasks')
      .insert(task, 'id')
}

module.exports = {
   find,
   add
}