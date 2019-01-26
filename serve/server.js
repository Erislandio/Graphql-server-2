const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')



const app = express()

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Servidor esta online na porta 4000')
})