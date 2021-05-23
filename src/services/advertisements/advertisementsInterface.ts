import { IQueryResult } from '../common/commonInterface'

export interface IAdvertismentDto {
  id: string,
  title: string
}

export interface IGetAdvertisementsRequest {
  titleContains?: string
}

export interface IGetAdvertisementsResponse extends IQueryResult<IAdvertismentDto>{

}




