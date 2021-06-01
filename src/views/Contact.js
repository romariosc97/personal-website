import React, { } from 'react';
import { Box, Text, Grid, GridItem, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingToTop from "../components/FloatingToTop";
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/ContactForm";
import ContactBackground from'../assets/img/breadcrumb/contact.jpg';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeadphonesAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact() {
    const backgroundProps = {
        style: {backgroundImage: `url('${ContactBackground}')`},
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    };
    const description = "Contrary to popular belief, Lorem Ipsum is not simply random text.";
    return (
        <Box>
            <Box position="relative" className="overlay-dark" {...backgroundProps}>
                <Navbar hover="blue" color="#f9f7f7" />
                <Breadcrumb description={description} title="Contact me" color="#f9f7f7"/>
            </Box>
            <Box bg="#F9F7F7" py={{base: '1rem', lg: '6rem'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="#112D4E">
                <Text display="inline-block" fontSize="lg" fontWeight="500" className="text-multicolor-gradient">Contact information</Text>
                <Text textAlign="center" fontSize="5xl" fontWeight="600">QUICK CONTACT</Text>
                <Text maxW={{base: '25rem', lg: '40rem'}} mb="3rem" textAlign="center" fontSize="lg" fontWeight="300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</Text>
                <Grid
                    className="contact-cards"
                    w="100%"
                    px={{base: '1rem', lg: '10rem'}}
                    templateColumns="repeat(3, 1fr)"
                    gap={8}
                >
                    <GridItem>
                        <Box display="flex" alignItems="center" minHeight={{base: "200px", lg: "215px"}} className="card shadow" w="100%" borderRadius="lg" bg="#FFF">
                            <Box py="2rem" px="2rem">
                                <FontAwesomeIcon size="2x" icon={faHeadphonesAlt} />
                                <Text mt="0.75rem" mb="0.5rem" fontSize="lg" fontWeight="600">Contact phone number</Text>
                                <Link fontWeight="300" fontSize="md" href="tel:+51955882023">
                                    +51 955 882 023
                                </Link>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box display="flex" alignItems="center" minHeight={{base: "200px", lg: "215px"}} className="card shadow" w="100%" borderRadius="lg" bg="#FFF">
                            <Box py="2rem" px="2rem">
                                <FontAwesomeIcon size="2x" icon={faEnvelope} />
                                <Text mt="0.75rem" mb="0.75rem" fontSize="lg" fontWeight="600">Email address</Text>
                                <Link mb="0.5rem" display="block" fontWeight="300" fontSize="md" href="mailto:romariosc15@outlook.com">
                                    romariosc15@outlook.com
                                </Link>
                                <Link mb="0.5rem" display="block" fontWeight="300" fontSize="md" href="mailto:romario@sarmiento.com">
                                    romario@sarmiento.com
                                </Link>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box display="flex" alignItems="center" minHeight={{base: "200px", lg: "215px"}} className="card shadow" w="100%" borderRadius="lg" bg="#FFF">
                            <Box py="2rem" px="2rem">
                                <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />
                                <Text mt="0.75rem" mb="0.75rem" fontSize="lg" fontWeight="600">Location</Text>
                                <Text mb="0.5rem" fontSize="md" fontWeight="300">
                                    Pampa inalámbrica
                                </Text>
                                <Text mb="0.5rem" fontSize="md" fontWeight="300">
                                    Ilo, Perú
                                </Text>
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
            <ContactForm />
            <FloatingToTop />
            <Footer />
        </Box>
    )
}
export default Contact;