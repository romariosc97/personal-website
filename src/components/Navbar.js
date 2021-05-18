import React, { useEffect } from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Navbar(props) {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Box className="shadow" bg={props.bg ? props.bg : 'white'} w="100%" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={'0.75rem'} color={props.color ? props.color : '#112D4E'} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontWeight="700" fontSize="xl">ROMARIO SARMIENTO</Text>
            <Flex className="nav-links" fontSize="md" fontWeight="500">
                <Link to="/">
                    <Text>Home</Text>
                </Link>
                <Link to="/about">
                    <Text>About</Text>
                </Link>
                <Link to="/portfolio">
                    <Text>Portfolio</Text>
                </Link>
                <Link to="/blog">
                    <Text>Blog</Text>
                </Link>
                <Link to="/contact">
                    <Text>Contact</Text>
                </Link>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar;