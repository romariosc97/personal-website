import React, { useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Box className="shadow" bg="#112D4E" w="100%" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '2rem'}} color="#DBE2EF" display="flex" flexDirection="row" justifyContent="space-between">
            <Box flex="1 1 0px" pr="8rem">
                <Text fontWeight="700" fontSize="xl" pb="0.5rem">About</Text>
                <Text fontWeight="300" fontSize="md" textAlign="justify" paddingY="0.5rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, nisi ad ab, nemo ratione, id soluta aspernatur nulla minus sit magnam. Corporis ipsam eaque reprehenderit quod quisquam.</Text>
            </Box>
            <Box flex="1 1 0px" pr="8rem" fontSize="md">
                <Text fontWeight="700" fontSize="xl" pb="0.5rem">Contact</Text>
                <Box paddingY="0.5rem" display="flex" flexDirection="row" alignItems="center">
                    <Box minWidth="1rem" textAlign="right">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </Box>
                    <Text pl="0.75rem" fontWeight="400">Ilo, Perú</Text>
                </Box>
                <Box paddingY="0.5rem" display="flex" flexDirection="row" alignItems="center">
                    <Box minWidth="1rem" textAlign="right">
                        <FontAwesomeIcon icon={faPhone} />
                    </Box>
                    <Text pl="0.75rem" fontWeight="400">+51 955 882 023</Text>
                </Box>
                <Box paddingY="0.5rem" display="flex" flexDirection="row" alignItems="center">
                    <Box minWidth="1rem" textAlign="right">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Box>
                    <Text pl="0.75rem" fontWeight="400">romariosc15@outlook.com</Text>
                </Box>
            </Box>
            <Box flex="1 1 0px">
                <Text fontWeight="700" fontSize="xl" pb="0.5rem">Sections</Text>
                <Box display="flex" flexDirection="row" fontSize="md">
                    <Box className="footer-links" pr="6rem">
                        <Link to="/">
                            <Text pt="0.5rem" pb="0.25rem" mb="0.25rem">Home</Text>
                        </Link>
                        <Link to="/about">
                            <Text pt="0.5rem" pb="0.25rem" mb="0.25rem">About</Text>
                        </Link>
                        <Link to="/portfolio">
                            <Text pt="0.5rem" pb="0.25rem" mb="0.25rem">Portfolio</Text>
                        </Link>
                    </Box>
                    <Box className="footer-links">
                        <Link to="/blog">
                            <Text pt="0.5rem" pb="0.25rem" mb="0.25rem">Blog</Text>
                        </Link>
                        <Link to="/contact">
                            <Text pt="0.5rem" pb="0.25rem" mb="0.25rem">Contact</Text>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Footer;