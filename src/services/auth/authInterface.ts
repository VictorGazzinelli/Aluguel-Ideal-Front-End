export interface IAuthRequest {
	grant_type: string,
	username: string,
  password: string,
	client_id: string
}

export interface IAuthResponse {
	access_token: string,
	expires_in: number
}



