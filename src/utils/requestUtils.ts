import axios, { AxiosInstance } from 'axios';

export default class requestUtils {
    static RequestInstance: AxiosInstance = axios.create({
      baseURL: process.env.REACT_APP_ENVIRONMENT === 'development' ?
      'http://localhost:5000/api' :
      'http://api-aluguel-ideal.herokuapp.com/api',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
      },
    });

    static setBearerToken(bearerToken: string) {
        this.RequestInstance = axios.create({
            baseURL: process.env.REACT_APP_ENVIRONMENT === 'development' ?
            'http://localhost:5000/api' :
            'http://api-aluguel-ideal.herokuapp.com/api',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });
    }
}
