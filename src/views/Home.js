import React, { useEffect } from 'react';
import { Box, Text, Flex, Grid, GridItem, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import { faWindowRestore, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode, faDatabase, faEye, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionHeader from "../components/SectionHeader";
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
    const services = [
        {title: "Software a la medida", description: "Desarrollo de páginas web y desarrollo de aplicaciones web.", icon: faLaptopCode},
        {title: "Documentación", description: "Material de consulta para el usuario y/o para el desarrollador.", icon: faFileAlt},
        {title: "Diseño responsivo", description: "Diseño optimizado para adaptarse a distintos dispositivos.", icon: faWindowRestore},
        {title: "Posicionamiento", description: "Para que su sitio web sea parte de primeros resultados de los motores de búsqueda.", icon: faEye},
        {title: "Desarrollo del lado del servidor", description: "Diseño y desarrollo de APIs para recuperar datos de sistemas propios o de sistemas externos.", icon: faDatabase},
        {title: "Despliegue", description: "Depuración y configuración de su aplicación en un servidor web.", icon: faServer},
    ];
    const header = {
        gradient: "Alcance profesional",
        title: "SERVICIOS",
        description: "Cada uno de los servicios brindados se rigen a las buenas prácticas de desarrollo, para garantizar la entrega de un producto de calidad."
    };
    return (
    <div>
        <Box {...backgroundProps}>
            <Navbar hover="blue" color="#112D4E" />
            <Box>
                <Flex pt={{base: '1rem', lg: '6rem'}} pb={{base: '1rem', lg: '7.5rem'}} px={{base: '1rem', lg: '10rem'}} alignItems="center" justifyContent="space-between" flexDirection="row" color="#112D4E">
                    <Flex flexDirection="column">
                        <Text w="fit-content" className="text-blue-gradient" fontSize="md" fontWeight="400">DESARROLLADOR WEB FULL STACK</Text>
                        <Text fontWeight="700" pb="1rem" pt="0.5rem" fontSize="6xl">Hola, soy <Text as="span" display="inline" color="#3f72af" > Romario</Text></Text>
                        <Text fontSize="lg" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify" fontWeight="300">
                            Especialista en JavaScript, con capacidad para desarrollar interfaces de usuario con React o Vue.js y la construcción de APIs empleando Node.js para la obtención de datos enviados desde el servidor.
                        </Text>
                        <Button
                            w="200px"
                            mt="2rem"
                            fontWeight="400"
                            fontSize="lg"
                            bg="#4286f4"
                            color="#F9F7F7"
                            py="1.5rem"
                            px="1.5rem"
                            rounded="xl"
                            _hover={{
                                background: "#307de4",
                                color: "#F9F7F7",
                            }}
                        >
                            DESCARGAR CV
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Box>
        <Box bg="#F9F7F7" py={{base: '1rem', lg: '6rem'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="#112D4E">
            <SectionHeader {...header} />
            <Grid
                alignItems="center"
                w="100%"
                px={{base: '1rem', lg: '10rem'}}
                pt={{base: '1rem', lg: '2.5rem'}}
                templateColumns="repeat(3, 1fr)"
                rowGap={4}
                columnGap={4}
            >
                {
                    services.map((v, k) => {
                        return(
                            <GridItem key={k}>
                                <Box display="flex" alignItems="center" minHeight={{base: "150px", lg: "150px"}} className="card" w="100%" borderRadius="lg">
                                    <Box py="2rem" px="2rem">
                                        <FontAwesomeIcon size="3x" icon={v.icon} />
                                        <Text mt="1.25rem" mb="0.75rem" fontSize="xl" fontWeight="600">{v.title}</Text>
                                        <Text fontSize="md" fontWeight="400">
                                            {v.description}
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>
                        )
                    })
                }
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
                    px="1.5rem"
                    rounded="xl"
                    _hover={{
                        background: "#307de4",
                        color: "#F9F7F7",
                    }}
                >
                    SALUDAR
                </Button>
            </Flex>
        </Box>
        <Certifications />
        <Footer />
    </div>
    )
}

export default Home;