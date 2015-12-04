import React from 'react'
import { connect } from 'react-redux'
import { addCount } from '../actions'

const Example = ({count, dispatch}) => (
  <div>
    <h2>Testing!</h2>
    <p>Count: {count}</p>
    <button onClick={() => dispatch(addCount())}>Change it</button>
  </div>
)

function mapStateToProps(count) {
  return {
    count
  }
}

export default connect(mapStateToProps)(Account)
