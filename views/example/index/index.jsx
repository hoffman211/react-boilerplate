import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Body from './components/body'
import reducers from './reducers'
import { get } from '../../../helpers/fetch'

class Container extends React.Component{
  static loadProps(params, cb) {
    get('http://api.openweathermap.org/data/2.5/weather?q=fresno,ca&appid=2de143494c0b295cca9337e1e96b00e0')
    .then(response => cb(null, { initialState: response.main.temp }))
    .catch(() => cb(null, 0))
  }

  componentWillMount(){
    this.store = createStore(reducers, this.props.initialState)
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
