// App Imports
import models from '../../models'

// Get results by name
export async function getByName(parentValue, {name}) {
  return await models.Result.findAll({where: {dba: name}})
}

// Get all results
export async function getAll() {
  return await models.Result.findAll()
}