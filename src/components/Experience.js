import React, { useEffect } from 'react';
import { Box, Text, Grid, GridItem, Badge, Image, Link } from "@chakra-ui/react";
import Oktana from'../assets/img/experience/oktana.png';
import Innovahora from'../assets/img/experience/innovahora.png';

function Experience() {
  const experience = [
    {company: "Innovahora S.A.C.", position: "Full stack web developer", period: "Sep. 2019 - Aug. 2020", description: "Collaborate with creative and development teams on the execution of ideas.", logo: Innovahora, companyUrl: "https://innovahora.com/ima/"},
    {company: "Oktana Corporation", position: "Salesforce developer", period: "Sep. 2020 - Act.", description: "Collaborate with creative and development teams on the execution of ideas.", logo: Oktana, companyUrl: "https://www.oktana.com/"}
  ];
  useEffect(() => {

  }, []);

  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} bg="#dbe2ef" color="#112D4E">
          <Text display="inline-block" fontSize="lg" fontWeight="500" className="text-multicolor-gradient">Companies</Text>
          <Text textAlign="center" fontSize="5xl" fontWeight="600">EXPERIENCE</Text>
          <Text mb="3rem" textAlign="center" fontSize="lg" fontWeight="300">Career path</Text>
          <Box>
            <Grid
              h="200px"
              templateColumns="repeat(2, 1fr)"
              gap={8}
              mb="0.5rem"
            >
              {
                experience.map((v, k) => {
                  return(
                    <GridItem key={k}>
                      <Box w="100%" borderWidth="1px" borderRadius="lg" bg="#f9f7f7">
                        <Box py="1.5rem" px="2rem">
                          <Box display="flex" >
                            <Box flex="1 1 0%">
                              <Text fontSize="xl" fontWeight="500">{v.company}</Text>
                              <Text mb="0.5rem" fontSize="md" fontWeight="400">{v.position}</Text>
                              <Badge mb="1rem" borderRadius="full" px="0.5rem" py="0.125rem" bg="#3F72AF" color="white">{v.period}</Badge>
                            </Box>
                            <Box>
                              <Link target="_blank" href={v.companyUrl}>
                                  <Image className="img-grow" src={v.logo} w="2.5rem" h="2.5rem" objectFit="contain" />
                              </Link>
                            </Box>
                          </Box>
                          <Text fontSize="sm" fontWeight="400" color="#333">
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

export default Experience;