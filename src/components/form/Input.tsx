import {
    FormControl,
    FormErrorMessage,
    InputGroup,
    InputLeftElement,
    Input as ChackraInput,
    InputProps as ChackraInputProps,
} from '@chakra-ui/react';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps extends ChackraInputProps {
    name: string,
    label: string,
    control?: Control<any>,
    error?:any
    icon?: IconProp,
}

export const Input: React.FC<IProps> = ({ name, label, control, icon, ...rest }) => {
    return (
        <Controller
            name={name} 
            control={control}
            render={({ field , fieldState:{ error } }) => (
                <FormControl isInvalid={!!error}>
                    <InputGroup size='lg' >
                        {
                            icon &&
                            <InputLeftElement
                                pointerEvents="none"
                                color='gray.600'
                                children={<FontAwesomeIcon icon={icon} />}
                            />
                        }
                        <ChackraInput
                            placeholder={label}
                            variant='filled'
                            bg='gray.100'
                            _hover={{ bg: 'gray.100' }}
                            _focus={{ bg: 'gray.100', borderColor: 'cyan.800' }}

                            {...field}
                            {...rest}
                        />
                    </InputGroup>

                    <FormErrorMessage>{error?.message}</FormErrorMessage>
                </FormControl>
            )}
        />
    )
}

