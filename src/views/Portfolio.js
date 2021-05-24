import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingToTop from "../components/FloatingToTop";
import Breadcrumb from "../components/Breadcrumb";
import FlipMove from 'react-flip-move';

function Portfolio() {
    const projects = [
        {id: 1, title: "Project 1", type: "Store", description: "This is a short description about Project 1", image: "project-1.jpg"},
        {id: 2, title: "Project 2", type: "CMS", description: "This is a short description about Project 2. This is a short description about Project 2", image: "project-2.jpg"},
        {id: 3, title: "Project 3", type: "CMS", description: "This is a short description about Project 3", image: "project-3.jpg"},
        {id: 4, title: "Project 4", type: "Store", description: "This is a short description about Project 4", image: "project-4.jpg"},
        {id: 5, title: "Project 5", type: "Stadistics", description: "This is a short description about Project 5", image: "project-5.jpg"},
        {id: 6, title: "Project 6", type: "Store", description: "This is a short description about Project 6", image: "project-6.jpg"},
    ];
    const types = ["Store", "CMS", "Stadistics"];
    const [filtered, setFiltered] = useState(projects);
    useEffect(() => {

    }, []);
    const filterData = (type) => {
        if(type==='All'){
            setFiltered(projects);
        }else{
            setFiltered(projects.filter((v) => v.type===type));
        }
    };
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
                <Grid textAlign="center" pt={{base:"2rem", lg:"5rem"}} pb={{base:"1rem", lg:"3rem"}} px={{base: '1rem', lg: '10rem'}} templateColumns="repeat(4, 1fr)" gap={8}>
                    {
                        types.map((v, k) => {
                            return (
                                <GridItem key={k}>
                                    <Box onClick={() => {filterData(v)}} className="filter-item" cursor="pointer" fontWeight="700">
                                        {v}
                                    </Box>
                                </GridItem>
                            )
                        })
                    }
                    <GridItem>
                        <Box onClick={() => {filterData('All')}} className="filter-item" cursor="pointer" fontWeight="700">
                            All
                        </Box>
                    </GridItem>
                </Grid>
                    <FlipMove className="project-container">
                    {
                        filtered.map((v, k) => {
                            return (
                                <Link to={"/portfolio/" + v.id} key={k}>
                                    <Box className="overlay-portfolio">
                                        <Image rounded="lg" height="250px" width="100%" objectFit="cover" src={process.env.PUBLIC_URL + "/projects/" + v.image} alt={v.title} />
                                        <Box className="text fadeIn-bottom" display="flex" alignItems="center" justifyContent="center" flexDirection="column" textAlign="justify">
                                            <Text px="1.5rem" fontSize="2xl" fontWeight="700" textTransform="uppercase">{v.title}</Text>
                                            <Text px="1.5rem" fontSize="lg" fontWeight="300">{v.description}</Text>
                                        </Box>
                                    </Box>
                                </Link>
                                    
                            )
                        })
                    }
                    </FlipMove>
            </Box>
            <FloatingToTop />
            <Footer />
        </div>
    )
}

export default Portfolio;