import React from 'react';
import { Box, Skeleton } from "@chakra-ui/react";

function CardPeriodLoading() {
    return (
        <Box w="100%" borderWidth="1px" borderRadius="lg" bg="white">
            <Box py="1.5rem" px="2rem">
                <Box display="flex">
                    <Box display="flex" flexDir="column">
                        <Skeleton mr="1rem" mb="auto" w="300px" height="1.25rem" />
                        <Skeleton mr="1rem" w="250px" height="1rem" />
                    </Box>
                    <Skeleton marginLeft="auto" w="50px" height="50px" />
                </Box>
                <Box mt="1rem">
                    <Skeleton rounded="lg" mr="1rem" w="100px" height="1rem" />
                    <Skeleton mt="1rem" w="90%" height="1rem" />
                    <Skeleton mt="1rem" w="80%" height="1rem" />
                </Box>
            </Box>
        </Box>
    )
}
export default CardPeriodLoading;