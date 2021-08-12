import React, { useEffect } from 'react';
import { Box, Grid, GridItem } from "@chakra-ui/react";
import CardPeriod from "../components/CardPeriod";
import SectionHeader from "../components/SectionHeader";

function Education() {
    const education = [
        {title: "Universidad Nacional de Moquegua", subtitle: "Ingeniería de Sistemas e Informática", period: "Apr. 2015 - Dec. 2019", description: "Bachiller en Ingeniería de Sistemas e Informática", logo: process.env.PUBLIC_URL + "/education/unam.png", url: "https://unam.edu.pe/"},
        {title: "TECSUP", subtitle: "Desarrollo web fullstack", period: "Jul. 2020 - Jan. 2021", description: "Certificado de estudio", logo: process.env.PUBLIC_URL + "/education/tecsup.png", url: "https://www.tecsup.edu.pe/"}
    ];
    useEffect(() => {

    }, []);
    const header = {
        gradient: "Formación académica",
        title: "EDUCACIÓN",
        description: "Universidades e institutos"
    };
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} bg="#F9F7F7" color="#112D4E">
                <SectionHeader {...header} />
                <Box mt="3rem" w="100%">
                    <Grid
                        templateColumns="repeat(2, 1fr)"
                        gap={8}
                    >
                        {
                            education.map((v, k) => {
                                return(
                                    <GridItem key={k}>
                                        <CardPeriod data={v} />
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Education;