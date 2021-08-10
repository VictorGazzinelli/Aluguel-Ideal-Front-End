import React, { useContext, useEffect } from 'react'
import Carrousel from '../../components/Carrousel';
import { ResidenceContext } from '../../providers/ResidenceProvider';
import residenceUtils from '../../utils/residenceUtils';
import { Button, Text } from "@chakra-ui/react";
import { IFlatDto } from '../../services/residences/residencesInterface';

const ResidenceScreen: React.FC = () => {

  const { selectedResidence } = useContext(ResidenceContext)

  const slides = [
    {
      img:
        "https://bit.ly/2k1H1t6",
    },
    {
      img:
        "https://bit.ly/2k1H1t6",
    },
    {
      img:
        "https://bit.ly/2k1H1t6",
    },
  ];

  return(
    <>
      <Carrousel slides={slides}/>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {residenceUtils.GetType(selectedResidence) + ' ' + selectedResidence.street}
      </Text>
      <Text mt={2}>{`${selectedResidence.area} m2`}</Text>
      <Text mt={2}>{`${selectedResidence.bathrooms} banheiro(s)`}</Text>
      <Text mt={2}>{`${selectedResidence.bedrooms} quarto(s)`}</Text>
      <Text mt={2}>{`Aluguel: R$ ${selectedResidence.rent}`}</Text>
      <Text mt={2}>{`IPTU: R$ ${selectedResidence.tax}`}</Text>
      {
        residenceUtils.isFlat(selectedResidence) &&
        <Text mt={2}>{`Condominio: R$ ${(selectedResidence as IFlatDto).condominium}`}</Text>
      }
      <Text mt={2}>{`R$ ${residenceUtils.GetFinalValue(selectedResidence)}/mês`}</Text>
      <Button onClick={() => alert('OK')}>Enviar Mensagem</Button>
    </>
  )
}

export default ResidenceScreen;