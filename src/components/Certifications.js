import React, { useEffect } from 'react';
import { Box, Text, Image } from "@chakra-ui/react";
import PlatformDeveloperI from'../assets/img/certifications/platform-developer-i.jpg';
import BecaPermanencia from'../assets/img/certifications/beca-permanencia.png';

function Certifications() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} bg="#dbe2ef" color="#112D4E">
            <Text className="section-title" textAlign="center" fontSize="5xl" fontWeight="600" mb="0.5rem">CERTIFICATIONS</Text>
            <Text mb="3rem" textAlign="center" fontSize="2xl" fontWeight="300">Achievements obtained</Text>
            <Box w="100%" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb="0.5rem">
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