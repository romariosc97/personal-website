import React, { useEffect, Fragment } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
function Breadcrumb(props) {
    useEffect(() => {
        
    }, []);
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} pt={{base: '1rem', sm: '2rem', lg: (props.description ? '10rem' : '8rem')}} pb={{base: '1rem', sm: '2rem', lg: (props.description ? (props.description===" " ? '6rem' : '10rem') : '8rem')}} bg={props.bg} color={props.color}>
                <Text maxW={{base: '25rem', lg: '60rem'}} zIndex="1" textAlign="center" fontSize="5xl" fontWeight="700">{props.title}</Text>
                <Box maxW={{base: '25rem', lg: '45rem'}} display="flex" flexDirection="row" fontSize="md" fontWeight="400">
                    {
                        props.description ?
                            (
                            <Fragment>
                                <Text mt="0.5rem" zIndex="1" fontSize="xl" textAlign="center">{props.description}</Text>
                            </Fragment>
                            )
                        :
                            (
                            <Fragment>
                                <Link to="/"><Text textAlign="center">Inicio</Text></Link>
                                <Box opacity="0.5" mx="0.5rem" my="auto" w="4.8px" h="5px" borderRadius="full" bg="#112D4E"/>
                                <Text textAlign="center">{props.title}</Text>
                            </Fragment>
                            )
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Breadcrumb;