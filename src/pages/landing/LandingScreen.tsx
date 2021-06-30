import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import Logo from '../../components/Logo'
import { Input, SubmitButton } from '../../components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema/schema';
import { IFormInputs } from './types/type';
import { useHistory } from 'react-router-dom';
import useDoRequest from '../../hooks/useDoRequest';
import { IGetResidencesRequest, IGetResidencesResponse } from '../../services/residences/residencesInterface';



const LandingScreen: React.FC = () => {

	const history = useHistory();
	const getResidencesRequest = useDoRequest((api) => api.residences.get)
	const { control, handleSubmit, formState: { isSubmitting } } = useForm<IFormInputs>({
		resolver: yupResolver(schema)
	});

	const submitForm: SubmitHandler<IFormInputs> = async(data) => {
		await new Promise( async (resolve, reject) => {
			// ToDo: get ids from data
			const dto: IGetResidencesRequest = {
				cityId: undefined,
				districtId: undefined,
				maxPrice: undefined,
				minBedrooms: undefined
			}
			await getResidencesRequest.doRequest(dto)
			.then((response: IGetResidencesResponse) => {
				history.push('/search')
				resolve(console.log(response))
			})
			.catch((err: any) => reject(console.log(err)))
		})
	}

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

					<Input control={control} label='Cidade' name='Cidade' />
					<Input control={control} label='Bairro' name='Bairro' />
					<Input control={control} label='Aluguel até' name='Aluguel' />
					<Input control={control} label='Quartos' name='Quartos' />

					<SubmitButton isLoading={isSubmitting}>Pesquisar</SubmitButton>
				</VStack>
			</Flex>

		</Flex>
	)
}

export default LandingScreen;