import pubsub from '../pubsub'

import Counter from '../Counter'

async function countIncr(root, args, context) {
  const count = Counter.increment()
  await pubsub.publish('countIncr', count)
  console.log('countIncr', '>>>', { count })
  return count
}

const Mutations = {
  countIncr,
  hello: () => 'hi',
}

// const MutationDefaults = {
//   count: 0,
// }

module.exports = Mutations
