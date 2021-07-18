import { Flex, RadioGroup, VStack, HStack, Text, Button, Radio } from '@chakra-ui/react';
import React, { useState } from 'react';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';

import { useHistory } from 'react-router-dom';
import { useBoolean } from 'react-hanger';
import { Slider, Typography } from '@material-ui/core';

const FilterScreen: React.FC = () => {
	//Todo: botoes de filtro
	const history = useHistory();
	const ehAluguel = useBoolean(true);
	const [qtdDormitorios, setQtdDormitorios] = useState('1');
	const [qtdBanheiros, setQtdBanheiros] = useState('1');
	const [value, setValue] = React.useState<number[]>([500, 3000]);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
		setValue(newValue);
	};

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
						variant={"outline"}
						onClick={(e) => setValue([500, value[1]])}
					>
						R$500
					</Button>
				</VStack>
				<VStack w={'100%'}>
					<Text marginBottom='1.5' fontSize='large'>Máximo R$20.000</Text>
					<Button
						colorScheme="linkedin"
						w={"100%"}

						variant={"outline"}
						onClick={(e) => setValue([value[0], 20000])}
					>
						R$20.000
					</Button>
				</VStack>
			</HStack>
			<Slider
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				min={500}
				step={100}
				max={20000}
				aria-labelledby="range-slider"
			/>
			<HStack marginBottom="1.5">
				<SingleBedIcon fontSize='large' style={{ color: '#00A0DC', border: "solid #00A0DC 1px", borderRadius: '10px' }} />
				<Text>Dormitórios</Text>
			</HStack>
			<RadioGroup
				onChange={setQtdDormitorios}
				value={qtdDormitorios}
				marginBottom="10"
			>
				<HStack>
					<Radio value="1">1+</Radio>
					<Radio value="2">2+</Radio>
					<Radio value="3">3+</Radio>
					<Radio value="4">4+</Radio>
				</HStack>
			</RadioGroup>

			<HStack marginBottom="1.5">
				<BathtubIcon fontSize='large' style={{ color: '#00A0DC', border: "solid #00A0DC 1px", borderRadius: '10px' }} />
				<Text>Banheiros</Text>
			</HStack>
			<RadioGroup
				onChange={setQtdBanheiros}
				value={qtdBanheiros}
				marginBottom="10"
			>
				<HStack>
					<Radio value="1">1+</Radio>
					<Radio value="2">2+</Radio>
					<Radio value="3">3+</Radio>
					<Radio value="4">4+</Radio>
				</HStack>
			</RadioGroup>

			<HStack>
				<Button
					colorScheme="linkedin"
					w={"100%"}
					variant={"outline"}
					onClick={(e) => alert("ToDo limpar filtros")}
				>
					Limpar filtros
				</Button>
				<Button
					colorScheme="linkedin"
					w={"100%"}
					variant={"solid"}
					onClick={(e) => alert("ToDo aplicar filtros")}
				>
					Aplicar filtros
				</Button>
			</HStack>
		</Flex>
	</Flex >)
}

export default FilterScreen;