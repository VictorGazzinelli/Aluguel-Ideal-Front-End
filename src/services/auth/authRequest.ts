import RequestUtils from '../../utils/requestUtils';

import {
	IAuthRequest,
  IAuthResponse,
} from './authInterface';

export default class authRequest {
	static login(dto: IAuthRequest): Promise<IAuthResponse> {
		return RequestUtils.RequestInstance.post(
			'auth', {} , { params: dto }
		).then((response: any) => response.data);
	}
}
