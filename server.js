import Koa from 'koa';
import KoaStatic from 'koa-static'
import Middleware from './middleware'
import Router from './routes'
const app = new Koa();

Middleware(app)
app.use(Router)
app.listen(3000)
