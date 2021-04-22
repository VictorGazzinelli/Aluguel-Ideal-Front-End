import RequestUtils from '../../utils/requestUtils';

import {
	IAuthLoginRequest,
  IAuthLoginResponse,
} from './authInterface';

export default class authRequest {
	static Login(dto: IAuthLoginRequest): Promise<IAuthLoginResponse> {
		return RequestUtils.RequestInstance.get(
			'Auth', {params: dto},
		).then((response: any) => response.data);
	}
	static Signup(dto: IAuthLoginRequest): Promise<IAuthLoginResponse> {
		return RequestUtils.RequestInstance.get(
			'Auth', {params: dto},
		).then((response: any) => response.data);
	}
}
