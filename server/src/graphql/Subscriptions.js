import pubsub from '../pubsub'

const count = {
  resolve: data => {
    console.log('CounterSub>', {data})
    return data
  },
  subscribe: () => pubsub.asyncIterator(['countIncr'])
}

const Subscriptions = {
  count
}

// console.log({CountSubs, Subscriptions})

module.exports = Subscriptions
