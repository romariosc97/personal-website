import React, { useEffect } from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link, useLocation } from 'react-router-dom';

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
    const location = useLocation();
    const currentPathname = location.pathname;
    const node = currentPathname.split("/");
    return (
        <div>
            <Box bg={props.bg ? props.bg : 'transparent'} w="100%" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={'1rem'} color={props.color ? props.color : '#112D4E'} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Text zIndex="1" fontWeight="700" fontSize="2xl">ROMARIO SARMIENTO</Text>
                <Flex className={"nav-links " + (hover)} fontSize="md" fontWeight="600">
                    <Link className={node[1]==="" ? "active" : ""} to="/">
                        <Text>Inicio</Text>
                    </Link>
                    <Link className={node[1]==="about" ? "active" : ""} to="/about">
                        <Text>Sobre mí</Text>
                    </Link>
                    <Link className={node[1]==="portfolio" ? "active" : ""} to="/portfolio">
                        <Text>Portafolio</Text>
                    </Link>
                    <Link className={node[1]==="blog" ? "active" : ""} to="/blog">
                        <Text>Blog</Text>
                    </Link>
                    <Link className={node[1]==="contact" ? "active" : ""} to="/contact">
                        <Text>Contacto</Text>
                    </Link>
                </Flex>
            </Box>
        </div>
    )
}

export default Navbar;