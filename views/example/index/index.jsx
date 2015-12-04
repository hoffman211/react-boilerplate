import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Body from './components/body'
import reducers from './reducers'
const store = createStore(reducers)

class Container extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Body />
      </Provider>
    )
  }
}
module.exports = Accounts
