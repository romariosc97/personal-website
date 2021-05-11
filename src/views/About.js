import React, { useEffect } from 'react';
import { Box, Text, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import AboutRomario from'../assets/img/about-romario.png';
import { faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Navbar />
        <Box backgroundColor="#F5F5F5">
            <Grid py="4rem" px={{base: '1rem', lg: '5rem'}} templateColumns="repeat(4, 1fr)" gap={10}>
                <GridItem>
                    <Image className="shadow-lg" src={AboutRomario} alt="Romario Sarmiento" />
                </GridItem>
                <GridItem colSpan="3">
                    <Text fontSize="4xl" fontWeight="400">ABOUT ME</Text>
                    <Text fontSize="lg" fontWeight="400">Web developer</Text>
                    <Text color="#333" fontSize="sm" fontWeight="400" my="1rem">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elnecess itatibus aperiam voluptas rem nam, dolorem dolores reiciend obcaecati quas iusto beatae ab asperiores explicabo laudan illum, volupt atem corrupti blanditiis fugit enim. Necess itatibu aperiam voluptas rem nam Lorem ipsum dolor sit amet, con sectetur adipisicing elit. Suscipit ullam ea assumenda facilis quo omnis fugit ipsum molest iae volupt atem et. Beatae architecto hic repudiandae! Quod fugit consequuntur provident, nemo ducimus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nulla, odit ipsum fugit dicta tempore expedita dolorem voluptatum dolore veniam totam, quae et ea possimus. Expedita, eum facilis minus aliquam! Necess itatibu aperiam voluptas rem nam Lorem ipsum dolor sit amet, con sectetur adipisicing elit. Suscipit.
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
        <Certifications />
        <Footer />
    </div>
  )
}

export default About;