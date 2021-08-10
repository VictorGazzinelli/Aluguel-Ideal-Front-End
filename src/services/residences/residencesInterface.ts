import { IQueryResult2 } from "../common/commonInterface";

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

export interface IFlatDto extends IResidenceDto {
  condominium: number,
  floor: number,
}

export interface IHouseDto extends IResidenceDto {
  yardArea: number,
}

export interface IGetResidencesRequest {
	cityId?: string,
	districtId?: string,
  maxPrice?: number,
	minBedrooms?: number
}

export interface IGetResidencesResponse extends IQueryResult2<IHouseDto | IFlatDto>{}



