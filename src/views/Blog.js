import React, { useEffect } from 'react';
import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeader from "../components/SectionHeader";
function Blog() {
    const projects = [
        {id: 1, title: "Article 1", description: "This is a short description about Article 1", image: "article-1.jpg"},
        {id: 2, title: "Article 2", description: "This is a short description about Article 2", image: "article-2.jpg"},
        {id: 3, title: "Article 3", description: "This is a short description about Article 3. This is a short description about Article 3", image: "article-3.jpg"},
        {id: 4, title: "Article 4", description: "This is a short description about Article 4", image: "article-4.jpg"},
        {id: 5, title: "Article 5", description: "This is a short description about Article 5", image: "article-5.jpg"},
        {id: 6, title: "Article 6", description: "This is a short description about Article 6", image: "article-6.jpg"},
    ];
    useEffect(() => {

    }, []);
    const header = {
        gradient: "All articles",
        title: "Blog",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    };
    return (
        <div>
            <Navbar bg="linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))" color="#f9f7f7" />
            <Breadcrumb title="Blog" bg="linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232))" color="#f9f7f7"/>
            <Box bg="#F9F7F7" py={{base: '1rem', lg: '6rem'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="#112D4E">
                <SectionHeader {...header} />
                <Grid py={{base:"2rem", lg:"5rem"}} px={{base: '1rem', lg: '10rem'}} templateColumns="repeat(3, 1fr)" gap={8}>
                    {
                        projects.map((v, k) => {
                            return (
                                <GridItem key={k}>
                                    <Box>
                                        <Box className="overlay-blog">
                                            <Image rounded="lg" height="400px" width="100%" objectFit="cover" src={process.env.PUBLIC_URL + "/blog/" + v.image} alt={v.title}/>
                                            <Box className="text fadeIn-bottom" display="flex" alignItems="center" justifyContent="flex-end" flexDirection="column">
                                                <Text alignSelf="end" fontSize="xl" fontWeight="500" px="2rem" textTransform="uppercase" color="#FFF">{v.title}</Text>
                                                <Text className="description" alignSelf="end" textAlign="justify" fontSize="md" fontWeight="300" px="2rem" color="#FFF">{v.description}</Text>
                                                <Link className="blue-button-outline button-sm" to={"/blog/" + v.id}>
                                                    READ MORE
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Footer />
        </div>
    )
}

export default Blog;