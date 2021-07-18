import { IQueryResult } from "../common/commonInterface";

export interface ICityDto {
  id: string,
  name: string,
}

export interface IGetCitiesResponse extends IQueryResult<ICityDto>{}



