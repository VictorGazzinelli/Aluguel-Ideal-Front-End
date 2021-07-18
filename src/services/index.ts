import auth from './auth/authRequest';
import residences from './residences/residencesRequest';
import cities from './cities/citiesRequest';

export default class apiRequests {
    static auth = auth;
    static residences = residences;
    static cities = cities;
}
