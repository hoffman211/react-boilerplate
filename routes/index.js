import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './routes'

export default (ctx, next) => {
  match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      ctx.response.status = 500
      ctx.body = error.message
    }
    else if (renderProps) {
      let initialState = ctx.state.initialState
      let html = renderToString(<RoutingContext {...renderProps} params={{initialState}} />)
      ctx.body = renderPage(html, initialState)

    } else {
      ctx.response.status = 404
      ctx.body = 'Not Found'
    }

  })
}

function renderPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/main.js"></script>
      </body>
    </html>
    `
}
