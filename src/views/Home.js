import React, { useEffect } from 'react';
import { Box, Text, Flex, Grid, GridItem, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import FloatingToTop from "../components/FloatingToTop";
import { faWindowRestore, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode, faDatabase, faEye, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Home() {
    useEffect(() => {

    }, []);
    const backgroundProps = {
        style: {backgroundImage: `url('${process.env.PUBLIC_URL + "/home-4.jpg"}')`},
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    };
    const parallaxProps = {
        style: {backgroundImage: `url('${process.env.PUBLIC_URL + "/parallax/parallax-2.jpg"}')`},
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    };
    return (
    <div>
        <Box {...backgroundProps}>
            <Navbar hover="blue" color="#112D4E" />
            <Box>
                <Flex pt={{base: '1rem', lg: '6rem'}} pb={{base: '1rem', lg: '7.5rem'}} px={{base: '1rem', lg: '10rem'}} alignItems="center" justifyContent="space-between" flexDirection="row" color="#112D4E">
                    <Flex flexDirection="column">
                        <Text w="fit-content" className="text-blue-gradient" fontSize="lg" fontWeight="400">FULL STACK WEB DEVELOPER</Text>
                        <Text fontWeight="700" pb="1rem" pt="0.5rem" fontSize="6xl">Hello, I'm <Text as="span" display="inline" color="#3f72af" > Romario</Text></Text>
                        <Text color="#757575" fontSize="lg" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, nisi ad ab, nemo ratione, id soluta aspernatur nulla minus sit magnam. Corporis ipsam eaque reprehenderit quod quisquam.
                        </Text>
                        <Button
                            w="200px"
                            mt="2rem"
                            fontWeight="400"
                            fontSize="lg"
                            bg="#4286f4"
                            color="#F9F7F7"
                            py="1.5rem"
                            px="2rem"
                            rounded="xl"
                            border="3px solid #4286f4"
                            _hover={{
                                background: "transparent",
                                color: "#4286f4",
                            }}
                        >
                            DESCARGAR CV
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Box>
        <Box bg="#F9F7F7" py={{base: '1rem', lg: '6rem'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="#112D4E">
            <Text className="text-blue-gradient" textAlign="center" fontSize="lg" fontWeight="500">Services</Text>
            <Text textAlign="center" fontSize="5xl" fontWeight="600" mb="1rem">Services</Text>
            <Text maxW={{base: '25rem', lg: '40rem'}} textAlign="center" fontSize="lg" fontWeight="300">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </Text>
            <Grid
                alignItems="center"
                w="100%"
                px={{base: '1rem', lg: '10rem'}}
                pt={{base: '1rem', lg: '2.5rem'}}
                templateColumns="repeat(3, 1fr)"
                rowGap={4}
                columnGap={8}
            >
                <GridItem>
                    <Box display="flex" alignItems="center" minHeight={{base: "150px", lg: "150px"}} className="card" w="100%" borderRadius="lg">
                        <Box py="2rem" px="2rem">
                            <FontAwesomeIcon size="2x" icon={faLaptopCode} />
                            <Text mt="0.75rem" mb="0.5rem" fontSize="lg" fontWeight="600">Software a la medida</Text>
                            <Text mt="0.75rem" mb="0.5rem" fontSize="md" fontWeight="400">
                                Desarrollo de sitios web y de aplicaciones web.
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box display="flex" alignItems="center" minHeight={{base: "150px", lg: "150px"}} className="card" w="100%" borderRadius="lg">
                        <Box py="2rem" px="2rem">
                            <FontAwesomeIcon size="2x" icon={faFileAlt} />
                            <Text mt="0.75rem" mb="0.5rem" fontSize="lg" fontWeight="600">Documentación</Text>
                            <Text mt="0.75rem" mb="0.5rem" fontSize="md" fontWeight="400">
                                Material de consulta para el usuario y/o para el desarrollador.
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box display="flex" alignItems="center" minHeight={{base: "150px", lg: "150px"}} className="card" w="100%" borderRadius="lg">
                        <Box py="2rem" px="2rem">
                            <FontAwesomeIcon size="2x" icon={faWindowRestore} />
                            <Text mt="0.75rem" mb="0.5rem" fontSize="lg" fontWeight="600">Diseño responsivo</Text>
                            <Text mt="0.75rem" mb="0.5rem" fontSize="md" fontWeight="400">
                                Diseño optimizado para adaptarse a distintos dispositivos.
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box display="flex" alignItems="center" minHeight={{base: "150px", lg: "150px"}} className="card" w="100%" borderRadius="lg">
                        <Box py="2rem" px="2rem">
                            <FontAwesomeIcon size="2x" icon={faEye} />
                            <Text mt="0.75rem" mb="0.5rem" fontSize="lg" fontWeight="600">Posicionamiento</Text>
                            <Text mt="0.75rem" mb="0.5rem" fontSize="md" fontWeight="400">
                                SEO para que su sitio web aparezca en los primeros resultados de los motores de búsqueda.
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box display="flex" alignItems="center" minHeight={{base: "150px", lg: "150px"}} className="card" w="100%" borderRadius="lg">
                        <Box py="2rem" px="2rem">
                            <FontAwesomeIcon size="2x" icon={faDatabase} />
                            <Text mt="0.75rem" mb="0.5rem" fontSize="lg" fontWeight="600">Desarrollo del lado del servidor</Text>
                            <Text mt="0.75rem" mb="0.5rem" fontSize="md" fontWeight="400">
                                Diseño y desarrollo de APIs para recuperar datos de sistemas propios o de sistemas externos.
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box display="flex" alignItems="center" minHeight={{base: "150px", lg: "150px"}} className="card" w="100%" borderRadius="lg">
                        <Box py="2rem" px="2rem">
                            <FontAwesomeIcon size="2x" icon={faServer} />
                            <Text mt="0.75rem" mb="0.5rem" fontSize="lg" fontWeight="600">Despliegue</Text>
                            <Text mt="0.75rem" mb="0.5rem" fontSize="md" fontWeight="400">
                                Subida y configuración de su aplicación en un servidor web.
                            </Text>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
        <Box position="relative" className="overlay-dark" w="100%" h="500px" {...parallaxProps}>
            <Flex height="100%" alignItems="center" justifyContent="center" flexDirection="column" color="#FFF">
                <Text zIndex="1" fontWeight="700" pb="1rem" pt="0.5rem" fontSize="5xl">¿LISTO PARA EMPEZAR?</Text>
                <Text zIndex="1" fontSize="xl">
                    Contáctame ahora mismo.
                </Text>
                <Button
                    mt="2rem"
                    fontWeight="400"
                    fontSize="lg"
                    bg="#4286f4"
                    color="#FFF"
                    py="1.5rem"
                    px="2rem"
                    rounded="xl"
                    border="3px solid #4286f4"
                    _hover={{
                        border: "3px solid #FFF",
                        background: "transparent",
                        color: "#FFF",
                    }}
                >
                    SALUDAR
                </Button>
            </Flex>
        </Box>
        <Certifications />
        <FloatingToTop />
        <Footer />
    </div>
    )
}

export default Home;