import React, { Fragment, useEffect, useState } from 'react';
import { Box, Grid, GridItem } from "@chakra-ui/react";
import CardPeriod from "../components/CardPeriod";
import SectionHeader from "../components/SectionHeader";
import Dates from "../utilities/Dates";

import EducationService from "../services/EducationService";
import CardPeriodLoading from "./CardPeriodLoading";
    
function Education() {
    const [education, setEducation] = useState([]);
    useEffect(() => {
        const getEducation = async () => {
            const response = await EducationService.getEducation();
            let tmp = response.data.data;
            tmp.forEach(v => {
                v.period_start = Dates.formatDate(v.period_start);
                v.period_end = Dates.formatDate(v.period_end);
            });
            setEducation(tmp);
        };
        getEducation();
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
                            education.length > 0 ?
                            education.map((v, k) => {
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

export default Education;