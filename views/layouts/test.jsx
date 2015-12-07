import React from 'react'
import { Link } from 'react-router'

class Test extends React.Component{
  static loadProps(params, cb) {
    cb()
  }

  render(){
    return (
      <div>
        <h2>Navjobs React Boilerplate</h2>
        <Link to="/">Home </Link>
        <Link to="/example">Example link</Link>
        {this.props.children}
      </div>
    )
  }
}
module.exports = Test
