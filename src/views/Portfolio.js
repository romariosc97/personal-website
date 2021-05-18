import React, { useEffect } from 'react';
import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingToTop from "../components/FloatingToTop";
import Breadcrumb from "../components/Breadcrumb";

function Portfolio() {
    const projects = [
        {id: 1, title: "Project 1", description: "This is a short description about Project 1", image: "project-1.jpg"},
        {id: 2, title: "Project 2", description: "This is a short description about Project 2. This is a short description about Project 2", image: "project-2.jpg"},
        {id: 3, title: "Project 3", description: "This is a short description about Project 3", image: "project-3.jpg"},
        {id: 4, title: "Project 4", description: "This is a short description about Project 4", image: "project-4.jpg"},
        {id: 5, title: "Project 5", description: "This is a short description about Project 5", image: "project-5.jpg"},
        {id: 6, title: "Project 6", description: "This is a short description about Project 6", image: "project-6.jpg"},
    ];
    useEffect(() => {

    }, []);

    return (
        <div>
            <Navbar bg="linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))" color="#f9f7f7" />
            <Breadcrumb title="Portfolio" bg="linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))" color="#f9f7f7"/>
            <Box bg="#F9F7F7" py={{base: '1rem', lg: '6rem'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="#112D4E">
                <Text className="text-blue-gradient" textAlign="center" fontSize="lg" fontWeight="500">All projects</Text>
                <Text textAlign="center" fontSize="5xl" fontWeight="600" mb="1rem">Work</Text>
                <Text maxW={{base: '25rem', lg: '40rem'}} textAlign="center" fontSize="lg" fontWeight="300">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                </Text>
                <Grid py={{base:"2rem", lg:"5rem"}} px={{base: '1rem', lg: '10rem'}} templateColumns="repeat(3, 1fr)" gap={8}>
                    {
                        projects.map((v, k) => {
                            return (
                                <GridItem key={k}>
                                    <Link to={"/portfolio/" + v.id}>
                                        <Box className="overlay-portfolio">
                                            <Image rounded="lg" height="250px" width="100%" objectFit="cover" src={process.env.PUBLIC_URL + "/projects/" + v.image} alt={v.title}/>
                                            <Box className="text fadeIn-bottom" display="flex" alignItems="center" justifyContent="center" flexDirection="column" textAlign="justify">
                                                <Text px="1.5rem" fontSize="2xl" fontWeight="700" textTransform="uppercase">{v.title}</Text>
                                                <Text px="1.5rem" fontSize="lg" fontWeight="300">{v.description}</Text>
                                            </Box>
                                        </Box>
                                    </Link>
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Box>
            <FloatingToTop />
            <Footer />
        </div>
    )
}

export default Portfolio;