if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }

module.exports = {
  path: 'example',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../views/example/index/index.jsx'))
    })
  }
}
