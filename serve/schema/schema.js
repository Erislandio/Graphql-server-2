const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        fisrtName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})