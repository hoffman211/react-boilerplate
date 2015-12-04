import { get } from '../../helpers/fetch'

export default(ctx, next) => {
  return get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0')
  .then(response => {
    ctx.state.initialState = response.main.temp
    next()
  })
}
