import React, { } from 'react';
import { Box, Grid, GridItem, Text, List, ListItem, Image } from "@chakra-ui/react";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ButtonRouter  from "../components/navigation/ButtonRouter";
function PortfolioDetail() {
    const backgroundProps = {
        style: {backgroundImage: `url('${process.env.PUBLIC_URL + "/projects/breadcrumb/portfolio-2.jpg"}')`},
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    };
    const description = "Aplicación para la subida de conjuntos de datos a tu org de salesforce.";
    return (
        <div>
            <Box position="relative" className="overlay-dark" {...backgroundProps}>
                <Navbar hover="blue" color="#f9f7f7" />
                <Breadcrumb description={description} title="LOWTIDE" color="#f9f7f7"/>
            </Box>
            <Box bg="#F9F7F7" px={{base: '1rem', lg: '10rem'}} py={{base: '1rem', lg: '6rem'}} color="#112D4E">
                <Grid
                    w="100%"
                    templateColumns="repeat(2, 1fr)"
                    rowGap={4}
                    columnGap={8}
                >
                    <GridItem>
                        <Text zIndex="1" fontWeight="600" pb="1rem" fontSize="4xl">Lowtide</Text>
                        <Text fontSize="lg" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify" fontWeight="300">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form have suffered alteration in some form.
                        </Text>
                        <br />
                        <Text fontSize="lg" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify" fontWeight="300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        </Text>
                        <Box mt={{base:'0.75rem', lg: '1.5rem'}} py="1rem">
                            <ButtonRouter external pathname="http://elipseasesorias.com">VISITAR SITIO WEB</ButtonRouter>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Text zIndex="1" fontWeight="500" pb="1rem" fontSize="2xl">Desarrollo</Text>
                        <Text fontSize="lg" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify" fontWeight="300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        </Text>
                        <br />
                        <Text fontSize="lg" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify" fontWeight="300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        </Text>
                        <List fontWeight="300" fontSize="md" marginTop="1rem" spacing={3}>
                            <ListItem>
                                <Box display="inline" mr="0.5rem"><FontAwesomeIcon size="1x" icon={faCheck} /></Box>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            </ListItem>
                            <ListItem>
                                <Box display="inline" mr="0.5rem"><FontAwesomeIcon size="1x" icon={faCheck} /></Box>
                                Assumenda, quia temporibus eveniet a libero incidunt suscipit
                            </ListItem>
                            <ListItem>
                                <Box display="inline" mr="0.5rem"><FontAwesomeIcon size="1x" icon={faCheck} /></Box>
                                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                            </ListItem>
                        </List>
                    </GridItem>
                </Grid>
                <Box pt={{base:'1rem', lg: '4rem'}}>
                    <Image my="1.5rem" src={process.env.PUBLIC_URL + "/projects/content/example-1.jpg"} alt="Example 1" />
                    <Image my="1.5rem" src={process.env.PUBLIC_URL + "/projects/content/example-2.jpg"} alt="Example 2" />
                </Box>
            </Box>
            <Footer />
        </div>
    )
}

export default PortfolioDetail;