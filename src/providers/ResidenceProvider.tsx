import React, { createContext, useState } from 'react';
import { useArray, UseArrayActions } from '../hooks/useArray';
import { IFlatDto, IHouseDto } from '../services/residences/residencesInterface';

export type Residence = IHouseDto | IFlatDto;

interface IResidenceContext {
  residences: UseArrayActions<Residence>,
  selectedResidence: Residence,
  setSelectedResidence: React.Dispatch<React.SetStateAction<Residence>>,
}

export const ResidenceContext = createContext({} as IResidenceContext);

const ResidenceProvider: React.FC = ({ children }) => {
  const residences = useArray<Residence>([]);
  const [ selectedResidence, setSelectedResidence] = useState<Residence>({} as Residence);

  const sharedValues: IResidenceContext = {
      residences,
      selectedResidence,
      setSelectedResidence
  };

  return (
      <ResidenceContext.Provider value={sharedValues}>
          {children}
      </ResidenceContext.Provider>
  );
};
export default ResidenceProvider;
