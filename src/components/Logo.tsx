import { Text, VStack, Heading } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.png'

const Logo: React.FC = () => (
    <VStack spacing={2} marginBottom={20}>
        <img src ={logo} alt="logo" />
        <Heading
            as = "h1" 
            size = "lg"
            fontSize='32px' 
            fontWeight='bold'
            letterSpacing='normal'
            color='black'
        >
            Aluguel Ideal
        </Heading>
        <Text 
            fontFamily='Roboto'
            fontSize='18px'
            color='gray.600'
        >
            Alugue sem sair de casa
        </Text>
    </VStack>
);

export default Logo;
