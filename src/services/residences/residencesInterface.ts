import { IQueryResult } from "../common/commonInterface";

export interface IResidenceDto {
  id: string,
  districtId: string,
  street: string,
  bedrooms: number,
  bathrooms: number,
  area: number,
  rent: number,
  tax: number,
  description: string,
}

export interface IGetResidencesRequest {
	cityId?: string,
	districtId?: string,
  maxPrice?: number,
	minBedrooms?: number
}

export interface IGetResidencesResponse extends IQueryResult<IResidenceDto>{}



