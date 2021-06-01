import React, { useEffect } from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Navbar(props) {
    let hover;
    switch (props.hover) {
        case "light":
            hover = "light";
            break;
        case "blue":
            hover = "blue";
            break;
        default:
            hover = "dark";
            break;
    }
    useEffect(() => {

    }, []);

    return (
        <div>
            <Box bg={props.bg ? props.bg : 'transparent'} w="100%" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={'1rem'} color={props.color ? props.color : '#112D4E'} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Text zIndex="1" fontWeight="700" fontSize="xl">ROMARIO SARMIENTO</Text>
                <Flex className={"nav-links " + (hover)} fontSize="md" fontWeight="500">
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