const Mutations = require('./Mutations')
const Queries = require('./Queries')
const Subscriptions = require('./Subscriptions')

const Resolvers = {
  Mutation: Mutations,
  Query: Queries,
  Subscription: Subscriptions,
}

export default Resolvers
