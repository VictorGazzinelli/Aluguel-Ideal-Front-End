import { Flex, InputLeftElement, VStack, Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';
import React, {useRef} from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../../components/Logo'
import { useHistory } from 'react-router-dom';
import useDoRequest from '../../hooks/useDoRequest';
import SearchIcon from '@material-ui/icons/Search';

const SearchScreen: React.FC = () => {
	const history = useHistory();
	const getResidencesRequest = useDoRequest((api) => api.residences.get);
	const timeoutRef = useRef<NodeJS.Timeout>();

	const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const changeText = evt.target.value;
		if(timeoutRef.current) clearTimeout(timeoutRef.current);
		//Todo: Chamar a api pra listar o texto
		timeoutRef.current = setTimeout(() => alert('toma seu texto'+changeText), 700);
	}

	const handleClick = () => {
		history.push('/filter');
	}

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
			<Logo />
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<SearchIcon />}
				/>
				<Input 
					type="text" 
					placeholder="Pesquisar" 
					onChange={(e) => handleSearch(e)}
					/>
				<InputRightElement width="4.5rem">
					<Button
						h="1.75rem"
						size="sm"
						onClick={handleClick}
					>
						<MenuIcon style={{ fontSize: 'medium', color: 'blue' }} />
					</Button>
				</InputRightElement>
			</InputGroup>
		</Flex>
	</Flex>)
}

export default SearchScreen;