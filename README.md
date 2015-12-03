##Why this is awesome

This application uses react-router to do dynamic routing, which is amazing. We are server rendering all pages, and mounting on the client. Thanks to webpack, all routes are split into chunks automatically. You can see js bundles load when you click on routes. I'll explain each folder below.
**Stay tuned for a blog post on [ReactJSNews](https://reactjsnews.com) about this**

##Packages used

- koa 2.0 beta
- react router 1.0
- babel-register 6.2.0 (for es6 imports in node)

##Folders

###routes

`routes.jsx` this file contains all of your routes. You can import as many child routes as you want. Take a look at the `example` folder or the react router [huge app example](https://github.com/rackt/react-router/blob/master/examples/huge-apps/app.js) to see more advanced routing.

`index.js` is responsible for rendering every page on the server. For now, you need to build your own way to pass data down. You can see inside of that file rendering looks like this:

```js
let html = renderToString(<RoutingContext {...renderProps} />)
ctx.body = renderPage(html, {name: 'test'})
```

The object passed to renderPage would be your initial state. Soon we will have our own way to do this, but for now pass in data however you please!

###views

This folder is your actual react components. Pretty simple!

###middleware

We initialize middleware here inside of inside of `server.js` so that we can keep that simple.

##helpers

Useful utilities. We have a wrapper around `fetch` that is used on the client and server.


##Install

```js
npm install
webpack
npm start
```
