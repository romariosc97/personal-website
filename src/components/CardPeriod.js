import React, { Fragment } from 'react';
import { Box, Text, Badge, Image, Link } from "@chakra-ui/react";
function CardPeriod(props) {
    return (
        <Fragment>
            <Box w="100%" borderWidth="1px" borderRadius="lg" bg="white">
                <Box py="1.5rem" px="2rem">
                    <Box display="flex" >
                    <Box flex="1 1 0%">
                        <Text fontSize="xl" fontWeight="500">{props.data.title}</Text>
                        <Text mb="0.5rem" fontSize="md" fontWeight="400">{props.data.subtitle}</Text>
                        <Badge fontWeight="600" mb="1rem" borderRadius="full" px="0.5rem" py="0.125rem" bg="#3F72AF" color="white">{props.data.period}</Badge>
                    </Box>
                    <Box>
                        <Link target="_blank" href={props.data.url}>
                            <Image className="img-grow" src={props.data.logo} w="2.5rem" h="2.5rem" objectFit="contain" />
                        </Link>
                    </Box>
                    </Box>
                    <Text fontSize="sm" fontWeight="300" color="#333">
                        {props.data.description}
                    </Text>
                </Box>
            </Box>
        </Fragment>
    )
}

export default CardPeriod;