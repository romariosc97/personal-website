import React, { useEffect } from 'react';
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

  useEffect(() => {

  }, []);

  return (
    <div>
        <Navbar />
        <Box backgroundColor="#F9F9F9">
            <Grid px={{base: '1rem', lg: '5rem'}} templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem>
                    <Text size="lg">Hola</Text>
                </GridItem>
                <GridItem colSpan="3">
                    <Text size="lg">Hola</Text>
                </GridItem>
            </Grid>
        </Box>
        <Footer />
    </div>
  )
}

export default About;