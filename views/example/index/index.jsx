import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Body from './components/body'
import reducers from './reducers'
/* globals window */

class Container extends React.Component{
  componentWillMount(){
    this.store = createStore(reducers, typeof window != 'undefined' ? window.__INITIAL_STATE__ : this.props.params.initialState)
  }

  render(){
    return (
      <Provider store={this.store}>
        <Body />
      </Provider>
    )
  }
}
module.exports = Container
