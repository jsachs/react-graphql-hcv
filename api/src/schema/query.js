// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as thought from './thoughts/fields/query'
import * as result  from './results/fields/query' 

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...thought,
    ...result
  })
})

export default query