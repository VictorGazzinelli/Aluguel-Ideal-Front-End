import { Button, Flex, FormControl, FormLabel, Select, VStack } from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import Logo from '../../components/Logo'
import { Input, SubmitButton } from '../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema/schema';
import { IFormInputs } from './types/type';
import { useHistory } from 'react-router-dom';
import useDoRequest from '../../hooks/useDoRequest';
import { IGetResidencesRequest, IGetResidencesResponse } from '../../services/residences/residencesInterface';
import { ICityDto, IGetCitiesResponse } from '../../services/cities/citiesInterface';
import { ResidenceContext } from '../../providers/ResidenceProvider';


interface KeyValue {
	key: number,
	value: string,
}

const LandingScreen: React.FC = () => {
	
	const history = useHistory();
	const getCitiesRequest = useDoRequest((api) => api.cities.get)
	const getResidencesRequest = useDoRequest((api) => api.residences.get)
	const { register, handleSubmit, formState: { isSubmitting } } = useForm<IFormInputs>({
		resolver: yupResolver(schema)
	});
	const [cities, setCities] = useState<ICityDto[]>([])
	const { residences } = useContext(ResidenceContext)

	const cleanFormData = (formData: any) : IFormInputs => {
		for (let propName in formData) {
			if (formData[propName] === "" || formData[propName] === "0") {
				delete formData[propName];
			}
		}
		return formData
	}

	const submitForm: SubmitHandler<IFormInputs> = async(data) => {
		const {cityId, maxPrice, minBedrooms} = cleanFormData(data)
		const dto: IGetResidencesRequest = {
			cityId,
			maxPrice,
			minBedrooms,
		}
		const getResidencesResponse : IGetResidencesResponse = await getResidencesRequest.doRequest(dto);
		console.log('getResidencesResponse', getResidencesResponse)
		residences.setValue(getResidencesResponse.Items)
		history.push('/search')
	}

	const onComponentMount = () => {
		getCitiesRequest.doRequest({})
		.then((response: IGetCitiesResponse) => {
			setCities(response.items);
		})
		.catch((err: any) => {
			throw new Error (`Erro ao listar cidades: ${err}`)
		})
	}
	useEffect(onComponentMount, []);

	const maxPriceRange : KeyValue[] = [
		{ key: 1000, value: 'R$ 1.000'},
		{ key: 2000, value: 'R$ 2.000'},
		{ key: 3000, value: 'R$ 3.000'},
		{ key: 4000, value: 'R$ 4.000'},
		{ key: 5000, value: 'R$ 5.000'},
		{ key: 10000, value: 'R$ 10.000'},
		{ key: 20000, value: 'R$ 20.000'},
	]

	const minBedroomRange : KeyValue[] = [
		{ key: 1, value: '1+'},
		{ key: 2, value: '2+'},
		{ key: 3, value: '3+'},
		{ key: 4, value: '4+'},
	]

	return (
		<Flex
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
				onSubmit={handleSubmit(submitForm)}
			>
				<Logo />

				<VStack spacing={7}>

				<Select {... register("cityId")}>
					<option value="" disabled selected hidden>Cidade</option>
						{
							cities.map(city => <option value={city.id}>{city.name}</option>)
						}
				</Select>

				<Select {... register("maxPrice")}>
					<option value={0} disabled selected hidden>Aluguel até</option>
						{
							maxPriceRange.map(maxPriceOption => <option value={maxPriceOption.key}>{maxPriceOption.value}</option>)
						}
				</Select>

				<Select {... register("minBedrooms")}>
					<option value={0} disabled selected hidden>Número de quartos</option>
						{
							minBedroomRange.map(minBedroomOption => <option value={minBedroomOption.key}>{minBedroomOption.value}</option>)
						}
				</Select>

      	<SubmitButton isLoading={isSubmitting}>Pesquisar</SubmitButton>
				</VStack>
			</Flex>

		</Flex>
	)
}

export default LandingScreen;