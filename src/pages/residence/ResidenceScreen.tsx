import React, { useContext, useEffect } from 'react'
import Carrousel from '../../components/Carrousel';
import { ResidenceContext } from '../../providers/ResidenceProvider';
import residenceUtils from '../../utils/residenceUtils';
import { Box, Button, Flex, Text, VStack, Image, Link } from "@chakra-ui/react";
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
    <Box p={4} display={{ md: "flex" }} overflow='auto'>
      <Box flexShrink={0}>
      <Carrousel slides={slides}/>
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {residenceUtils.GetType(selectedResidence) + ' ' + selectedResidence.street}
        </Text>
        <Text mt={2}>{`${selectedResidence.area} m²`}</Text>
        <Text mt={2}>{`${selectedResidence.bathrooms} banheiro(s)`}</Text>
        <Text mt={2}>{`${selectedResidence.bedrooms} quarto(s)`}</Text>
        <Text mt={2}>{selectedResidence.description}</Text>
        <Text mt={2}>{`Aluguel: R$ ${selectedResidence.rent}`}</Text>
        <Text mt={2}>{`IPTU: R$ ${selectedResidence.tax}`}</Text>
        {
          residenceUtils.isFlat(selectedResidence) &&
          <Text mt={2}>{`Condominio: R$ ${(selectedResidence as IFlatDto).condominium}`}</Text>
        }
        <Text mt={2}>{`Total: R$ ${residenceUtils.GetFinalValue(selectedResidence)}/mês`}</Text>
        <Button colorScheme="blue" onClick={() => window.location.href = `https://wa.me/5531999596907?text=Oi,%20vi%20seu%20anuncio%20no%20Aluguel%20Ideal`}>Enviar Mensagem</Button>
      </Box>
    </Box>
  )
}

export default ResidenceScreen;