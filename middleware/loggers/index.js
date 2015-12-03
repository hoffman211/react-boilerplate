import RequestTime from './development/requestTime'

export default app => {
  if(process.env.NODE_ENV != 'production'){
    app.use(RequestTime)
  }
}
