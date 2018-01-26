// Imports
import {GraphQLInt, GraphQLString, GraphQLList} from 'graphql'

// App Imports
import ResultType from '../type'
import {getAll, getByName} from '../resolvers'

// Results All
export const results = {
  type: new GraphQLList(ResultType),
  resolve: getAll
}

// Result By Name
export const result = {
  type: new GraphQLList(ResultType),
  args: {
    name: {type: GraphQLString}
  },
  resolve: getByName
}