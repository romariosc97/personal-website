import React, { useEffect } from 'react';
import { Box, Text, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Navbar bg="linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))" color="#f9f7f7" />
        <Breadcrumb title="Sobre mí" bg="linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))" color="#f9f7f7"/>
        <Box backgroundColor="#F9F7F7">
            <Grid py="5rem" px={{base: '1rem', lg: '10rem'}} templateColumns="repeat(4, 1fr)" gap={10}>
                <GridItem>
                    <Image borderRadius="lg" src={process.env.PUBLIC_URL + "/about.jpg"} alt="Romario Sarmiento" />
                </GridItem>
                <GridItem colSpan="3" color="#112D4E">
                    <Text textTransform="uppercase" display="inline-block" fontSize="lg" fontWeight="500" className="text-multicolor-gradient">Full stack web developer</Text>
                    <Text fontSize="5xl" fontWeight="600">SOBRE MÍ</Text>
                    <Text color="#757575" fontSize="lg" fontWeight="300" my="1rem" textAlign="justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elnecess itatibus aperiam voluptas rem nam, dolorem dolores reiciend obcaecati quas iusto beatae ab asperiores explicabo laudan illum, volupt atem corrupti blanditiis fugit enim. Necess itatibu aperiam voluptas rem nam Lorem ipsum dolor sit amet, con sectetur adipisicing elit. Suscipit ullam ea assumenda facilis quo omnis fugit ipsum molest iae volupt atem et.
                    </Text>
                    <Text fontSize="lg" fontWeight="600" mb="0.5rem">Sígueme</Text>
                    <Box display="flex" flexDirection="row" className="about-social-media" mt="1rem">
                        <Link mr="1rem" href="https://www.linkedin.com/in/romariosarmiento/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon size="lg" icon={faLinkedin} color="#0a66c2"/>
                        </Link>
                        <Link mr="1rem" href="https://github.com/romariosc97" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon size="lg" icon={faGithub} color="#333"/>
                        </Link>
                        <Link mr="1rem" href="https://www.youtube.com/channel/UCaoHn3uiNZuf574nSOHW4Cw" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon size="lg" icon={faYoutube} color="#ff0000" />
                        </Link>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
        <Experience />
        <Education />
        <Certifications />
        <Footer />
    </div>
  )
}

export default About;