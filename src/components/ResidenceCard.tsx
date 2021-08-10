import * as React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { IResidenceDto } from "../services/residences/residencesInterface";
import residenceUtils from "../utils/residenceUtils";

interface IProps {
  residence: IResidenceDto
  onClick?: () => void,
}

const ResidenceCard: React.FC<IProps> = ({ residence, onClick, }) => (
    <Box p="5" maxW="320px" borderWidth="1px" onClick={onClick}>
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {residenceUtils.GetType(residence) + ' ' + residence.street}
        </Text>
        <Text mt={2}>{`R$ ${residenceUtils.GetFinalValue(residence)}/mês`}</Text>
    </Box>
);
export default ResidenceCard;