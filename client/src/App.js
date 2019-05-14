import React from 'react';
import gql from 'graphql-tag';
import { Mutation, Subscription } from 'react-apollo'

const COUNTER_SUBSCRIPTION = gql`
subscription onCountIncr {
  count
}
`

const Counter = () => (
  <Subscription
    subscription={COUNTER_SUBSCRIPTION}
    // variables={{ repoFullName }}
  >
    {({ data, loading }) => {
      console.log({loading, data})
      return loading
        ? <h1>Loading ...</h1>
        : data.count
          ? <h2>Counter: {data.count}</h2>
          : <h1>Counter Subscription Not Available</h1>
    }}
  </Subscription>
)

const COUNTER_MUTATION = gql`
mutation onCountIncr {
  countIncr
}
`
const CounterButton = () => (
  <Mutation mutation={COUNTER_MUTATION}>
    {(countIncr, { data }) => (
      <button onClick={e => countIncr()}>
        {data && data.countIncr
        ? `Increase Counter from ${data.countIncr}`
        : 'Increase Counter'}
      </button>
    )}
  </Mutation>
)

export default function HomePage(props) {
  return  <div style={{padding: '20px'}}>
    <Counter />
    <CounterButton />
  </div>
}
