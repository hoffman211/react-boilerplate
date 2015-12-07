import React from 'react'
import { render } from 'react-dom'
import { match, Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from '../routes/routes'
import AsyncProps from 'async-props'
/* globals document, window */


const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

// calling `match` is simply for side effects of
// loading route/component code for the initial location
match({ routes, location }, () => {
  render(
    <Router
      routes={routes}
      history={createBrowserHistory()}
      RoutingContext={AsyncProps}
    />,
    document.getElementById('app')
  )
})
