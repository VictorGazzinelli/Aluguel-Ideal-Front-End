import RequestUtils from '../../utils/requestUtils';

import {
	IGetAdvertisementsRequest,
  IGetAdvertisementsResponse,
} from './advertisementsInterface';

export default class advertisementsRequest {
	static GetAdvertisements(dto: IGetAdvertisementsRequest): Promise<IGetAdvertisementsResponse> {
		return RequestUtils.RequestInstance.get(
			'Advertisements', {params: dto},
		).then((response: any) => response.data);
	}
}
