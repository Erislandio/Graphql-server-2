const graphql = require('graphql')
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

const users = [
    {
        id: '23', fisrtName: "Erislandio", age: 23
    },
    {
        id: '47', fisrtName: "jéssica", age: 18
    }
]


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        fisrtName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: {
                        GraphQLString
                    }
                }
            },
            resolve(parentValue, args) {
                return _.find(users, {
                    id: args.id
                })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})