import React, { useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
function Breadcrumb(props) {
    useEffect(() => {
        
    }, []);

    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '7.5rem'}} bg={props.bg} color={props.color}>
                <Text textAlign="center" fontSize="4xl" fontWeight="700">{props.title}</Text>
                <Box display="flex" flexDirection="row" fontSize="md" fontWeight="400">
                    <Link to="/"><Text textAlign="center">Home</Text></Link>
                    <Box opacity="0.5" mx="0.5rem" my="auto" w="5px" h="5px" borderRadius="full" bg="#112D4E"/>
                    <Text textAlign="center">{props.title}</Text>
                </Box>
            </Box>
        </div>
    )
}

export default Breadcrumb;