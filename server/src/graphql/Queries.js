import Counter from '../Counter'

// Provide resolver functions for your schema fields
const Queries = {
  hello: () => 'Hello world!',
  count: () => Counter.value
}

module.exports = Queries
