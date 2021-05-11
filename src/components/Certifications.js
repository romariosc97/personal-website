import React, { useEffect } from 'react';
import { Box, Text, Image } from "@chakra-ui/react";
import PlatformDeveloperI from'../assets/img/certifications/platform-developer-i.jpg';
import BecaPermanencia from'../assets/img/certifications/beca-permanencia.png';

function Certifications() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'5rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} bg="#FEFEFE" color="black">
            <Text textAlign="center" fontSize="5xl" fontWeight="600">CERTIFICATIONS</Text>
            <Text mb="3rem" textAlign="center" fontSize="2xl" fontWeight="300">Achievements obtained</Text>
            <Box w="100%" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" mb="0.5rem">
                <Box w="10rem">
                    <Image w="100%" src={PlatformDeveloperI} alt="Romario Sarmiento" />
                </Box>
                <Box w="17.5rem">
                    <Image w="100%" src={BecaPermanencia} alt="Romario Sarmiento" />
                </Box>
                <Box w="10rem">
                    <Image w="100%" src={PlatformDeveloperI} alt="Romario Sarmiento" />
                </Box>
                <Box w="17.5rem">
                    <Image w="100%" src={BecaPermanencia} alt="Romario Sarmiento" />
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Certifications;