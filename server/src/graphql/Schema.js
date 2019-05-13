// Construct a schema, using GraphQL schema language

const { gql } = require('apollo-server-express')

const Query = gql`
  type Query {
    hello: String
    count: Float
  }
`

const Mutation =  gql`
  type Mutation {
    countIncr: Float
    hello: String
  }
`

const Subscription = gql`
  type Subscription {
    count: Float
  }
`

const Schema = [
  Query,
  Mutation,
  Subscription,
]

export default Schema
