import React, { useEffect, useState, Fragment } from 'react';
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";
import CardPeriod from "../components/CardPeriod";
import Dates from "../utilities/Dates";

import ExperienceService from "../services/ExperienceService";
import CardPeriodLoading from "./CardPeriodLoading";

function Experience() {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const getExperience = async () => {
        const response = await ExperienceService.getExperience();
        let tmp = response.data.data;
        tmp.forEach(v => {
            v.period_start = Dates.formatDate(v.period_start);
            v.period_end = Dates.formatDate(v.period_end);
        });
        setExperience(tmp);
    };
    getExperience();
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
          <Box mt="3rem" w="100%">
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={8}
            >
              {
                experience.length > 0 ?
                experience.map((v, k) => {
                  return(
                    <GridItem key={k}>
                      <CardPeriod data={v} />
                    </GridItem>
                  )
                }) : 
                <Fragment>
                  <CardPeriodLoading />
                  <CardPeriodLoading />
                </Fragment>
              }
            </Grid>
          </Box>
        </Box>
    </div>
  )
}

export default Experience;