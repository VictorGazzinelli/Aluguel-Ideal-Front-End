import { Flex, RadioGroup, VStack, HStack, Box, Text, Button, ButtonGroup, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useRadioGroup } from '@chakra-ui/react';
import React, { useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SingleBedIcon from '@material-ui/icons/SingleBed';

import Logo from '../../components/Logo'
import { useHistory } from 'react-router-dom';
import useDoRequest from '../../hooks/useDoRequest';
import SearchIcon from '@material-ui/icons/Search';
import { useBoolean } from 'react-hanger';
import RadioCard from '../../components/RadioCard';

const FilterScreen: React.FC = () => {

	const history = useHistory();
	const ehAluguel = useBoolean(true);

	// const dormitorioRadioGroup = useRadioGroup({
	// 	name: "framework",
	// 	defaultValue: "react",
	// 	onChange: console.log,
	// })

	// const EscolhaQuantidade = () => {
	// 	const aaaa = dormitorioRadioGroup.getRadioProps(1);
	// 	return (
	// 		<RadioGroup defaultValue="1">
	// 			<HStack spacing={4} direction="row">
	// 				<RadioCard >1+</RadioCard >
	// 				<RadioCard>2+</RadioCard >
	// 				<RadioCard>3+</RadioCard >
	// 				<RadioCard>4+</RadioCard >
	// 			</HStack>
	// 		</RadioGroup>
	// 	)
	// }

	return (<Flex
		w='100%'
		h='100%'
		align='center'
		justify='flex-start'
		overflow='auto'
		flexDir='column'
	>
		<Flex
			as='form'
			width='100%'
			maxW={'100%'}
			flexDir='column'
			p='8'
			h={'100%'}
		>
			<Text marginBottom='1.5' fontSize='large'>Valor</Text>
			<HStack style={{ justifyContent: 'space-evenly' }} w={"100%"} align="center" marginBottom='10'>
				<Button
					colorScheme="linkedin"
					w={"100%"}
					variant={ehAluguel.value ? "solid" : "outline"}
					onClick={ehAluguel.setTrue}>
					Aluguel
				</Button>
				<Button
					colorScheme="linkedin"
					w={"100%"}
					variant={ehAluguel.value ? "outline" : "solid"}
					onClick={ehAluguel.setFalse}>
					Valor total
				</Button>
			</HStack>
			<Text marginBottom='1.5' fontSize='large'>Valor</Text>
			<HStack style={{ justifyContent: 'space-evenly' }} w={"100%"} align="center" marginBottom='5'>
				<VStack w={'100%'} >
					<Text marginBottom='1.5' fontSize='large'>Mínimo R$500</Text>
					<Button
						colorScheme="linkedin"
						w={"100%"}
						variant={ehAluguel.value ? "solid" : "outline"}
						onClick={ehAluguel.setTrue}>
						R$500
					</Button>
				</VStack>
				<VStack w={'100%'}>
					<Text marginBottom='1.5' fontSize='large'>Máximo R$20.000</Text>
					<Button
						colorScheme="linkedin"
						w={"100%"}
						variant={ehAluguel.value ? "outline" : "solid"}
						onClick={ehAluguel.setFalse}>
						R$20.000
					</Button>
				</VStack>
			</HStack>
			<Slider aria-label="slider-ex-1" defaultValue={30} marginBottom="10">
				<SliderTrack>
					<SliderFilledTrack />
				</SliderTrack>
				<SliderThumb />
			</Slider>
			<HStack>
				<SingleBedIcon fontSize='large' style={{ color: '#00A0DC', border: "solid #00A0DC 1px", borderRadius: '10px' }} />
				<Text>Dormitórios</Text>
			</HStack>
			{/* <EscolhaQuantidade /> */}
		</Flex>
	</Flex >)
}

export default FilterScreen;