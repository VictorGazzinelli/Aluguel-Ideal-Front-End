import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import { faKey, faEnvelope, } from '@fortawesome/free-solid-svg-icons';

import { Input, SubmitButton } from '../../components/form';
import Logo from '../../components/Logo';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { schemaLogin } from './schema/schemaLogin';
import { typesLogin } from './types/typesLogin';
import useDoRequest from '../../hooks/useDoRequest';
import { IAuthRequest, IAuthResponse } from '../../services/auth/authInterface';
import requestUtils from '../../utils/requestUtils';
import { useHistory } from 'react-router-dom';

const LoginScreen: React.FC = () => {

	const history = useHistory();
	const loginRequest = useDoRequest((api) => api.auth.login)
	const { control, handleSubmit, formState:{isSubmitting} } = useForm<typesLogin>({
		resolver: yupResolver(schemaLogin)
	});

	const submitForm: SubmitHandler<typesLogin> = async(data) => {
		await new Promise( async (resolve, reject) => {
			const dto: IAuthRequest = {
				grant_type: 'password',
				client_id: 'client_id',
				username: data.Email,
				password: data.Senha,
			}
			await loginRequest.doRequest(dto)
			.then((response: IAuthResponse) => {
				requestUtils.setBearerToken(response.access_token)
				history.push('/landing')
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
				<VStack spacing={8}>

					<Input name='Email' label='Email' type="email" icon={faEnvelope} control={control}/>
					<Input name='Senha' label='Senha' type="password" icon={faKey} control={control}/>

					<SubmitButton isLoading={isSubmitting}>Logar</SubmitButton>
				</VStack>
			</Flex>
		</Flex>
	)
}

export default LoginScreen;
