import { Flex, HStack, Input, InputGroup, Text, Button, InputLeftElement, VStack } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from "@chakra-ui/react"

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(8),
		height: theme.spacing(8),
	},
}));

const UsersScreen: React.FC = () => {
	const classes = useStyles();
	const [textSearch, setTextSearch] = useState('');
	const timeoutRef = useRef<NodeJS.Timeout>();

	const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const changeText = evt.target.value;
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		//Todo: Chamar a api pra listar o texto
		timeoutRef.current = setTimeout(() => {
			setTextSearch(changeText)
		}, 500);
	}

	const mockItens = [
		{
			id: 1,
			name: 'lorem ipson 1',
			email: 'loremipson@gmail.com',
			image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg',
		},
		{
			id: 2,
			name: 'lorem ipson 2',
			email: 'loremipson@hotmail.com',
			image: 'https://images.uncyc.org/pt/thumb/5/54/Euestoumuitobem.jpg/200px-Euestoumuitobem.jpg',
		}
	]

	const editarUser = (id: number) => {
		alert('todo editar')
	}

	const deletarUser = (id: number) => {
		alert('todo deletar')
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
			>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<SearchIcon />}
					/>
					<Input
						type="text"
						placeholder="Buscar por nome"
						onChange={(e) => handleSearch(e)}
					/>
				</InputGroup>
				{
					mockItens.filter(i => !textSearch || i.name.includes(textSearch)).map((item) => {
						return (
							<>
								<HStack marginTop="5">
									<Avatar
										alt="Remy Sharp"
										src={item.image}
										className={classes.avatar}>
									</Avatar>
									<VStack>
										<Text marginBottom='1.5' fontSize='medium'>{item.name}</Text>
										<Text marginBottom='1.5' fontSize='medium'>{item.email}</Text>
									</VStack>
									<HStack position="fixed" right="20px">
										<Button
											colorScheme="linkedin"
											onClick={(e) => editarUser(item.id)}
										//variant={ehAluguel.value ? "solid" : "outline"}
										>
											<EditIcon />
										</Button>
										<Button
											colorScheme="linkedin"
											onClick={(e) => deletarUser(item.id)}
										//variant={ehAluguel.value ? "solid" : "outline"}
										>
											<ClearIcon />
										</Button>
									</HStack>
								</HStack>

								<Divider marginTop="5" />
							</>
						)
					})
				}
			</Flex>
		</Flex>
	)
}

export default UsersScreen;