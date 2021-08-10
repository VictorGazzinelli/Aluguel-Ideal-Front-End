import axios, { AxiosInstance } from 'axios';

export default class requestUtils {
    static RequestInstance: AxiosInstance = axios.create({
      baseURL: process.env.REACT_APP_ENVIRONMENT === 'development' ?
      'https://api-aluguel-ideal.herokuapp.com/api':'http://localhost:5000/api',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
      },
    });

    static setBearerToken(bearerToken: string) {
        this.RequestInstance = axios.create({
            baseURL: process.env.REACT_APP_ENVIRONMENT === 'development' ?
            'https://api-aluguel-ideal.herokuapp.com/api':'http://localhost:5000/api',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });
    }

    static hasAuthorizationHeader() : boolean {
        let x = false;
        console.log(x)
        if(!this.RequestInstance.defaults.headers.Authorization)
            return false;
        x = this.RequestInstance.defaults.headers.Authorization.replace('Bearer','').trim().length > 0;
        console.log(x)
        return x;
    }
}
