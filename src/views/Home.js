import React, { useEffect } from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import HomeRomario from'../assets/img/home-romario.png';
import FloatingToTop from "../components/FloatingToTop";

function Home() {
    useEffect(() => {

    }, []);

    return (
    <div>
        <Navbar hover="blue" bg="#dbe2ef" color="#112D4E" />
        <Box backgroundColor="#dbe2ef">
            <Flex px={{base: '1rem', lg: '10rem'}} alignItems="center" justifyContent="space-between" flexDirection="row" color="#112D4E">
                <Flex flexDirection="column">
                    <Text w="fit-content" className="text-blue-gradient" fontSize="md">FULL STACK WEB DEVELOPER</Text>
                    <Text fontWeight="700" pb="1rem" pt="0.5rem" fontSize="6xl">Hello, I'm <Text as="span" display="inline" color="#3f72af" > Romario</Text></Text>
                    <Text color="#757575" fontSize="lg" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, nisi ad ab, nemo ratione, id soluta aspernatur nulla minus sit magnam. Corporis ipsam eaque reprehenderit quod quisquam.
                    </Text>
                </Flex>
                <Box boxSize="sm" style={{backgroundImage: `url('${HomeRomario}')`}} backgroundSize="cover" backgroundPosition="center -50px" backgroundRepeat="no-repeat">
                    
                </Box>
            </Flex>
        </Box>
        <Certifications />
        <FloatingToTop />
        <Footer />
    </div>
    )
}

export default Home;