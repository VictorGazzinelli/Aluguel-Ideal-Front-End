export default class appConfig {
  static backendUrl = process.env.REACT_APP_ENVIRONMENT === 'development' ?
    'http://localhost:5000/api' :
    'http://api-aluguel-ideal.herokuapp.com/api'
}