import serve from 'koa-static'
import convert from 'koa-convert'
import Loggers from './loggers'
import initialState from './api/initialState'

export default app => {
  app.use(convert(serve('./__dist__')))
  app.use(initialState)
  Loggers(app)
}
