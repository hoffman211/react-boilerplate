import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import AsyncProps, { loadPropsOnServer } from 'async-props'
import routes from './routes'

export default (ctx, next) => {
  match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
    ctx.respond = false
    // 1. load the props
    loadPropsOnServer(renderProps, (err, asyncProps, scriptTag) => {
      if (error) {
        ctx.res.writeHead(500, {'Content-Type': 'text/plain'});
        ctx.res.end(error.message)
      }
      else if (renderProps) {
        let html = renderToString(<AsyncProps {...renderProps} {...asyncProps} />)
        ctx.res.writeHead(200, {'Content-Type': 'text/html'});
        ctx.res.end(renderPage(html, scriptTag))
      } else {
        ctx.res.writeHead(404, {'Content-Type': 'text/plain'});
        ctx.res.end('Not Found')
      }

    })
  })
}

function renderPage(html, scriptTag) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React</title>
      </head>
      <body>
        <div id="app">${html}</div>
        ${scriptTag}
        <script src="/main.js"></script>
      </body>
    </html>
    `
}
