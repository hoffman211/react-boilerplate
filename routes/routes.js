export default {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('../views/layouts/test.jsx'),
    childRoutes: [
      require('./example')
    ]
  }]
}
