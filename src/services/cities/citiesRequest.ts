import RequestUtils from '../../utils/requestUtils';

import {
  IGetCitiesResponse,
} from './citiesInterface';

export default class citiesRequest {
	static get(dto: any): Promise<IGetCitiesResponse> {
		return RequestUtils.RequestInstance.get(
			'cities',
		).then((response: any) => response.data);
	}
}
