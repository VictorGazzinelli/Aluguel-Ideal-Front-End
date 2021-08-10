import { IResidenceDto, IFlatDto } from "../services/residences/residencesInterface";

export default class residenceUtils {
  static isHousing(residence : IResidenceDto) : boolean {
    return residence.hasOwnProperty('yardArea');
  }
  static isFlat(residence: IResidenceDto) : boolean {
    return residence.hasOwnProperty('condominium');
  }
  static GetType(residence : IResidenceDto) : string {
    if(this.isFlat(residence)) {
      return 'Apartamento';
    }
    return 'Casa';
  }
  static GetFinalValue(residence : IResidenceDto) : number {
    let finalValue = 0;
    finalValue += residence.rent + residence.tax;
    if(this.isFlat(residence)){
      finalValue += (residence as IFlatDto).condominium;
    }
    return finalValue;
  }
}