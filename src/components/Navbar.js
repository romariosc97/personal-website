import React, { useEffect } from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Navbar() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Box className="shadow" bg="white" w="100%" px={{base: '1rem', sm: '2rem', lg:'5rem'}} py={'1rem'} color="black" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontWeight="700" fontSize="xl">ROMARIO</Text>
            <Flex className="nav-links">
                <Link to="/">
                    <Text fontSize="md">Home</Text>
                </Link>
                <Link to="/about">
                    <Text fontSize="md">About</Text>
                </Link>
                <Link to="/portfolio">
                    <Text fontSize="md">Portfolio</Text>
                </Link>
                <Link to="/blog">
                    <Text fontSize="md">Blog</Text>
                </Link>
                <Link to="/contact">
                    <Text fontSize="md">Contact</Text>
                </Link>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar;