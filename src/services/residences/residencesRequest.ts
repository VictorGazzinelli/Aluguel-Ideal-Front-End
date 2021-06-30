import RequestUtils from '../../utils/requestUtils';

import {
	IGetResidencesRequest,
  IGetResidencesResponse,
} from './residencesInterface';

export default class residencesRequest {
	static get(dto: IGetResidencesRequest): Promise<IGetResidencesResponse> {
		return RequestUtils.RequestInstance.get(
			'residences', { params: dto }
		).then((response: any) => response.data);
	}
}
