import React, { useEffect } from 'react';
import { Box, Text, Image } from "@chakra-ui/react";
import PlatformDeveloperI from'../assets/img/certifications/platform-developer-i.jpg';
import JavascriptDeveloperI from'../assets/img/certifications/javascript-developer-i.png';
import ScrumFundamentals from'../assets/img/certifications/scrum-fundamentals.png';

function Certifications() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} color="#112D4E">
            <Text display="inline-block" fontSize="lg" fontWeight="500" className="text-multicolor-gradient">Achievements</Text>
            <Text textAlign="center" fontSize="5xl" fontWeight="600" mb="3rem">CERTIFICATIONS</Text>
            <Box className="certifications" w="100%" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" mb="0.5rem">
                <Box w="8rem">
                    <Image w="100%" src={PlatformDeveloperI} alt="Romario Sarmiento" />
                </Box>
                <Box w="6rem">
                    <Image w="100%" src={JavascriptDeveloperI} alt="Romario Sarmiento" />
                </Box>
                <Box w="10rem">
                    <Image w="100%" src={ScrumFundamentals} alt="Romario Sarmiento" />
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Certifications;