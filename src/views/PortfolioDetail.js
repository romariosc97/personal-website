import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import { Box, Grid, GridItem, Text, List, ListItem, Image, Divider } from "@chakra-ui/react";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ButtonRouter  from "../components/navigation/ButtonRouter";

import PortfolioService from "../services/PortfolioService";

function PortfolioDetail() {
    const { id } = useParams();
    const backgroundProps = {
        style: {backgroundImage: `url('${process.env.PUBLIC_URL + "/projects/breadcrumb/portfolio-2.jpg"}')`},
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    };
    const [description, setDescription] = useState([]);
    const [development, setDevelopment] = useState([]);
    const [images, setImages] = useState([]);
    const [detail, setDetail] = useState({
        name: '',
        description: '',
        short_description: ''
    });
    const normalizeText = (text) => {
        let tmp = [];
        const descriptionArray = text.split('<br/>');
        descriptionArray.forEach(value => {
            tmp.push((
                <Fragment>
                    <Text fontSize="lg" maxWidth={{base:'400px', lg: '700px'}} textAlign="justify" fontWeight="300">
                        {value}
                    </Text>
                    <br />
                </Fragment>
            ));
        });
        return tmp;
    };
    useEffect(() => {
        const getDetail = async () => {
            const response = await PortfolioService.getPortfolioById(id);
            setDetail(response.data.data);
            setDescription(normalizeText(response.data.data.description));
            setDevelopment(normalizeText(response.data.data.development));
        };
        const getImages = async () => {
            const response = await PortfolioService.getPortfolioByIdImages(id);
            setImages(response.data.data);
        };
        getDetail();
        getImages();
    }, [id]);
    return (
        <div>
            <Box position="relative" className="overlay-dark" {...backgroundProps}>
                <Navbar hover="blue" color="#f9f7f7" />
                <Breadcrumb description={detail.short_description} title={detail.name} color="#f9f7f7"/>
            </Box>
            <Box bg="#FFF" px={{base: '1rem', lg: '10rem'}} py={{base: '1rem', lg: '6rem'}} color="#112D4E">
                <Grid
                    w="100%"
                    templateColumns="repeat(2, 1fr)"
                    rowGap={4}
                    columnGap={8}
                >
                    <GridItem>
                        <Text zIndex="1" fontWeight="600" fontSize="4xl">{detail.name}</Text>
                        <Divider mt={{lg: "0.5rem"}} mb={{lg: "1.5rem"}} />
                        {
                            description.map((v, k) => {
                                return (
                                    <Fragment key={k}>
                                        {v}      
                                    </Fragment>
                                )
                            })
                        }
                        <Box py="1rem">
                            <ButtonRouter external pathname="http://elipseasesorias.com">VISITAR SITIO WEB</ButtonRouter>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Text zIndex="1" fontWeight="500" pb="1rem" fontSize="2xl">Desarrollo</Text>
                        {
                            development.map((v, k) => {
                                return (
                                    <Fragment key={k}>
                                        {v}      
                                    </Fragment>
                                )
                            })
                        }
                        <List fontWeight="300" fontSize="md" spacing={3}>
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
                {
                    images.length > 0 ?
                    <Box pt={{base:'1rem', lg: '4rem'}}>
                        {
                            images.map((v, k) => {
                                return (
                                    <Image key={k} rounded="lg" my="2rem" src={process.env.REACT_APP_API_URL + v.image} alt={v.name} />
                                )
                            })
                        }
                    </Box> : ''
                }
            </Box>
            <Footer />
        </div>
    )
}

export default PortfolioDetail;