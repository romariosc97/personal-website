import React, { useState, useEffect, Fragment } from 'react';
import { Box, Text, Grid, GridItem, Image, Skeleton } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import FlipMove from 'react-flip-move';
import SectionHeader from "../components/SectionHeader";

import PortfolioService from "../services/PortfolioService";
import TypeService from "../services/TypeService";
import { API_URL } from "../config/";

function Portfolio() {
    const header = {
        gradient: "Proyectos",
        title: "Trabajo",
        description: "Mostraré algunos proyectos que he desarrollado a lo largo de mi trayectoria profesional."
    };

    const [types, setTypes] = useState([]);
    const [projects, setProjects] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const getPortfolio = async () => {
        const response = await PortfolioService.getPortfolio();
        setProjects(response.data.data);
        setFiltered(response.data.data);
    }
    const getTypes = async () => {
        const responseType = await TypeService.getTypes();
        setTypes(responseType.data.data);
    }
    const filterData = (typeId) => {
        if(typeId===0){
            setFiltered(projects);
        }else{
            setFiltered(projects.filter((v) => v.project_type_id===typeId));
        }
    };
    useEffect(() => {
        getPortfolio();
        getTypes();
    }, []);
    return (
        <div>
            <Navbar hover="dark" bg="linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))" color="#f9f7f7" />
            <Breadcrumb title="Portafolio" bg="linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))" color="#f9f7f7"/>
            <Box bg="#F9F7F7" py={{base: '1rem', lg: '6rem'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="#112D4E">
                <SectionHeader {...header} />
                <Grid textAlign="center" pt={{base:"2rem", lg:"5rem"}} pb={{base:"1rem", lg:"3rem"}} px={{base: '1rem', lg: '10rem'}} templateColumns="repeat(3, 1fr)" gap={8}>
                    {
                        types.length > 0 ?
                        types.map((v, k) => {
                            return (
                                <GridItem key={k}>
                                    <Box onClick={() => {filterData(v.id)}} className="filter-item" cursor="pointer" fontWeight="700">
                                        {v.name}
                                    </Box>
                                </GridItem>
                            )
                        }) :
                        <Fragment>
                            <Skeleton w="75px" height="1rem" />
                            <Skeleton w="75px" height="1rem" />
                            <Skeleton w="75px" height="1rem" />
                        </Fragment>
                    }
                    {
                        types.length > 0 ?
                        <GridItem>
                            <Box onClick={() => {filterData(0)}} className="filter-item" cursor="pointer" fontWeight="700">
                                Todo
                            </Box>
                        </GridItem> : ''
                    }
                </Grid>
                    <FlipMove className="project-container">
                    {
                        filtered.length > 0 ?
                        filtered.map((v, k) => {
                            return (
                                <Link to={"/portfolio/" + v.id} key={k}>
                                    <Box className="overlay-portfolio">
                                        <Image rounded="lg" height="250px" width="100%" objectFit="cover" src={API_URL + v.image} alt={v.name} />
                                        <Box className="text fadeIn-bottom" display="flex" alignItems="center" justifyContent="center" flexDirection="column" textAlign="justify">
                                            <Text px="1.5rem" fontSize="2xl" fontWeight="700" textTransform="uppercase">{v.name}</Text>
                                            <Text px="1.5rem" fontSize="lg" fontWeight="300">{v.short_description}</Text>
                                        </Box>
                                    </Box>
                                </Link>
                                    
                            )
                        }) : 
                        <Fragment>
                            <Skeleton w="100%" height="250px" />
                            <Skeleton w="100%" height="250px" />
                            <Skeleton w="100%" height="250px" />
                        </Fragment>
                    }
                    </FlipMove>
            </Box>
            <Footer />
        </div>
    )
}

export default Portfolio;