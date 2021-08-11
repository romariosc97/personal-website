import React, { useEffect } from 'react';
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";
import CardPeriod from "../components/CardPeriod";

function Experience() {
  const experience = [
    {title: "Innovahora S.A.C.", subtitle: "Full stack web developer", period: "Sep. 2019 - Aug. 2020", description: "Collaborate with creative and development teams on the execution of ideas.", logo: process.env.PUBLIC_URL + "/experience/innovahora.png", url: "https://innovahora.com/ima/"},
    {title: "Oktana Corporation", subtitle: "Salesforce developer", period: "Sep. 2020 - Act.", description: "Collaborate with creative and development teams on the execution of ideas.", logo: process.env.PUBLIC_URL + "/experience/oktana.png", url: "https://www.oktana.com/"}
  ];
  useEffect(() => {

  }, []);
  const header = {
    gradient: "Camino profesional",
    title: "EXPERIENCIA",
    description: "Compañías en las que he trabajado"
  };
  return (
    <div>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} bg="#dbe2ef" color="#112D4E">
          <SectionHeader {...header} />
          <Box mt="3rem">
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

export default Experience;