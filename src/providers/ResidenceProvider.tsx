import React, { createContext, useState } from 'react';
import { useArray, UseArrayActions } from '../hooks/useArray';
import { IFlatDto, IHouseDto } from '../services/residences/residencesInterface';

export type Residence = IHouseDto | IFlatDto;

interface IResidenceContext {
  residences: UseArrayActions<Residence>,
  selectedResidence: Residence,
  setSelectedResidence: React.Dispatch<React.SetStateAction<Residence>>,
  isUserAuthenticated: boolean,
  setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ResidenceContext = createContext({} as IResidenceContext);

const ResidenceProvider: React.FC = ({ children }) => {
  const residences = useArray<Residence>([]);
  const [ selectedResidence, setSelectedResidence ] = useState<Residence>({} as Residence);
  const [ isUserAuthenticated, setIsUserAuthenticated ] = useState<boolean>(false);

  const sharedValues: IResidenceContext = {
      residences,
      selectedResidence,
      setSelectedResidence,
      isUserAuthenticated,
      setIsUserAuthenticated
  };

  return (
      <ResidenceContext.Provider value={sharedValues}>
          {children}
      </ResidenceContext.Provider>
  );
};
export default ResidenceProvider;
