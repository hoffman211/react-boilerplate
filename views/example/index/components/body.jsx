import React from 'react'
import { connect } from 'react-redux'
import { addCount } from '../actions'

const Example = ({count, dispatch}) => (
  <div>
    <h2>Testing!</h2>
    <p>Current Temp: {count}</p>
    <button onClick={() => dispatch(addCount())}>Add 1</button>
  </div>
)

function mapStateToProps(count) {
  return {
    count
  }
}

export default connect(mapStateToProps)(Example)
