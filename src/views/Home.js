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
        <Navbar />
        <Box backgroundColor="#F9F7F7">
            <Flex px={{base: '1rem', lg: '10rem'}} alignItems="center" justifyContent="space-between" flexDirection="row" color="#112D4E">
                <Flex flexDirection="column">
                    <Text pb="0.5rem" fontSize="5xl" className="home-name">Romario Sarmiento</Text>
                    <Text mt="1.25rem" mb="0.75rem" fontSize="3xl">Web developer</Text>
                    <Text color="#333" fontSize="md" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify">
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