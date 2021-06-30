import { Box, useRadio } from "@chakra-ui/react"
import React, { useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SingleBedIcon from '@material-ui/icons/SingleBed';

import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { useBoolean } from 'react-hanger';

const RadioCard = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                _checked={{
                    bg: "teal.600",
                    color: "white",
                    borderColor: "teal.600",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default RadioCard;