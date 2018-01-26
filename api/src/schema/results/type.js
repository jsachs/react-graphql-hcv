// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Thought type
const ThoughtType = new GraphQLObjectType({
  name: 'result',
  description: '...',

  fields: () => ({
    camis: {type: GraphQLInt},
    dba: {type: GraphQLString},
    boro: {type: GraphQLString},
    address: {
      type: GraphQLString,  
      resolve: (obj) => {
        return obj.dataValues.building + " " + obj.dataValues.street + ", " + obj.dataValues.zipcode;
      }
    },
    phone: {type: GraphQLString},
    inspection_date: {type: GraphQLString},
    action: {type: GraphQLString},
    violation: {
      type: GraphQLString,
      resolve: (obj) => obj.dataValues.violation_description
    },
    score: {type: GraphQLInt},
    grade: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default ThoughtType