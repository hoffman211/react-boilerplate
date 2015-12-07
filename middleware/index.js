import serve from 'koa-static'
import convert from 'koa-convert'
import Loggers from './loggers'

export default app => {
  app.use(convert(serve('./__dist__')))
  Loggers(app)
}
