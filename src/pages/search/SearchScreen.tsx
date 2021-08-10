import { Flex, InputLeftElement, VStack, Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';
import React, {useContext, useEffect, useRef} from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../../components/Logo'
import { useHistory } from 'react-router-dom';
import useDoRequest from '../../hooks/useDoRequest';
import SearchIcon from '@material-ui/icons/Search';
import { Residence, ResidenceContext } from '../../providers/ResidenceProvider';
import ResidenceCard from '../../components/ResidenceCard';

const SearchScreen: React.FC = () => {
	const history = useHistory();
	const timeoutRef = useRef<NodeJS.Timeout>();
	const { residences, setSelectedResidence } = useContext(ResidenceContext);

	const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const changeText = evt.target.value;
		if(timeoutRef.current) clearTimeout(timeoutRef.current);
		//Todo: Chamar a api pra listar o texto
		//timeoutRef.current = setTimeout(() => alert('toma seu texto'+changeText), 700);
	}

	const onFilterButtonClick = () => {
		history.push('/filter');
	}

	const onResidenceCardClick = (residence: Residence) => {
		setSelectedResidence(residence);
		history.push(`/residence/${residence.id}`);
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
						onClick={onFilterButtonClick}
					>
						<MenuIcon style={{ fontSize: 'medium', color: 'blue' }} />
					</Button>
				</InputRightElement>
			</InputGroup>
		</Flex>
		{
			residences.value?.map((residence: Residence) => <ResidenceCard residence={residence} key={residence.id} onClick={() => onResidenceCardClick(residence)} />)
		}
	</Flex>
	)
}

export default SearchScreen;