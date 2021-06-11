import React, { useEffect } from 'react';
import { Box, Image } from "@chakra-ui/react";
import PlatformDeveloperI from'../assets/img/certifications/platform-developer-i.jpg';
import JavascriptDeveloperI from'../assets/img/certifications/javascript-developer-i.png';
import ScrumFundamentals from'../assets/img/certifications/scrum-fundamentals.png';
import SectionHeader from "../components/SectionHeader";
function Certifications() {

    useEffect(() => {

    }, []);
    const header = {
        gradient: "Especializaciones",
        title: "CERTIFICACIONES"
    };
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} color="#112D4E">
                <SectionHeader {...header} />
                <Box className="certifications" w="100%" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" mb="0.5rem" mt="3rem">
                    <Box w="9rem">
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