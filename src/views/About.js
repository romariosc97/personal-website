import React, { useEffect } from 'react';
import { Box, Text, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Education from "../components/Education";
import FloatingToTop from "../components/FloatingToTop";
import AboutRomario from'../assets/img/about-romario.png';
import { faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Navbar />
        <Box backgroundColor="#F9F7F7">
            <Grid py="4rem" px={{base: '1rem', lg: '10rem'}} templateColumns="repeat(4, 1fr)" gap={10}>
                <GridItem>
                    <Image className="shadow-lg" src={AboutRomario} alt="Romario Sarmiento" />
                </GridItem>
                <GridItem colSpan="3" color="#112D4E">
                    <Text fontSize="4xl" fontWeight="600">ABOUT ME</Text>
                    <Text fontSize="xl" fontWeight="500">Web developer</Text>
                    <Text color="#333" fontSize="md" fontWeight="300" my="1rem" textAlign="justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elnecess itatibus aperiam voluptas rem nam, dolorem dolores reiciend obcaecati quas iusto beatae ab asperiores explicabo laudan illum, volupt atem corrupti blanditiis fugit enim. Necess itatibu aperiam voluptas rem nam Lorem ipsum dolor sit amet, con sectetur adipisicing elit. Suscipit ullam ea assumenda facilis quo omnis fugit ipsum molest iae volupt atem et.
                    </Text>
                    <Box display="flex" flexDirection="row" className="about-social-media">
                        <Link mr="1rem" mt="0.5rem" href="https://www.linkedin.com/in/romariosarmiento/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
                        </Link>
                        <Link mr="1rem" mt="0.5rem" href="https://github.com/romariosc97" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon size="lg" icon={faGithub} />
                        </Link>
                        <Link mr="1rem" mt="0.5rem" href="https://www.youtube.com/channel/UCaoHn3uiNZuf574nSOHW4Cw" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon size="lg" icon={faYoutube} />
                        </Link>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
        <Experience />
        <Education />
        <Certifications />
        <FloatingToTop />
        <Footer />
    </div>
  )
}

export default About;