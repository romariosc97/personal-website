import React, { useEffect } from 'react';
import { Box, Text, Grid, GridItem, Badge, Image, Link } from "@chakra-ui/react";
import Tecsup from'../assets/img/education/tecsup.png';
import Unam from'../assets/img/education/unam.png';

function Education() {
    const education = [
        {school: "Universidad Nacional de Moquegua", subject: "Ingeniería de Sistemas e Informática", period: "Apr. 2015 - Dec. 2019", description: "Collaborate with creative and development teams on the execution of ideas.", logo: Unam, schoolUrl: "https://unam.edu.pe/"},
        {school: "TECSUP", subject: "Full stack web development", period: "Jul. 2020 - Jan. 2021", description: "Collaborate with creative and development teams on the execution of ideas.", logo: Tecsup, schoolUrl: "https://www.tecsup.edu.pe/"}
    ];
    useEffect(() => {

    }, []);

    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} bg="#F9F7F7" color="#112D4E">
                <Text className="section-title" textAlign="center" fontSize="5xl" fontWeight="600" mb="0.5rem">EDUCATION</Text>
                <Text mb="3rem" textAlign="center" fontSize="2xl" fontWeight="300">Academic formation</Text>
                <Box>
                    <Grid
                        h="200px"
                        templateColumns="repeat(2, 1fr)"
                        gap={8}
                    >
                        {
                            education.map((v, k) => {
                                return(
                                <GridItem key={k}>
                                    <Box w="100%" borderWidth="1px" borderRadius="lg" bg="white">
                                        <Box py="1.5rem" px="2rem">
                                            <Box display="flex" >
                                            <Box flex="1 1 0%">
                                                <Text fontSize="xl" fontWeight="500">{v.school}</Text>
                                                <Text mb="0.5rem" fontSize="lg" fontWeight="400">{v.subject}</Text>
                                                <Badge mb="1rem" borderRadius="full" px="0.5rem" py="0.125rem" bg="#3F72AF" color="white">{v.period}</Badge>
                                            </Box>
                                            <Box>
                                                <Link href={v.schoolUrl}>
                                                    <Image src={v.logo} w="4rem"/>
                                                </Link>
                                            </Box>
                                            </Box>
                                            <Text fontSize="md" fontWeight="300" color="#333">
                                                {v.description}
                                            </Text>
                                        </Box>
                                    </Box>
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