import { IFlatDto, IHouseDto } from "../services/residences/residencesInterface";
import residenceUtils from "../utils/residenceUtils";

it("Test residenceUtils.GetType of House returns `Casa`", async () => {
    const houseResidence : IHouseDto = {
      id: "any_id",
      districtId: "any_districtId",
      street: "any_street",
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      rent: 0,
      tax: 0,
      description: "any_description",
      yardArea: 0,
    }
    expect(residenceUtils.GetType(houseResidence)).toBe("Casa");
});

it("Test residenceUtils.GetType of Flat returns `Apartamento`", async () => {
  const flatResidence : IFlatDto = {
    id: "any_id",
    districtId: "any_districtId",
    street: "any_street",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    rent: 0,
    tax: 0,
    description: "any_description",
    condominium: 0,
    floor: 0,
  }
  expect(residenceUtils.GetType(flatResidence)).toBe("Apartamento");
});