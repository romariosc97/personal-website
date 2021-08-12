import React, { useEffect } from 'react';
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";
import CardPeriod from "../components/CardPeriod";

function Experience() {
  const experience = [
    {title: "Oktana Corporation", subtitle: "Salesforce developer", period: "Sep. 2020 - Act.", description: "Fundamentos de APEX y Lightning Web Components (LWC)<br/>Desarrollo de interfaces de usuario en React o en Vue.js, apoyados por Chakra UI o Tailwind CSS<br/>Construcción de API REST en Node.js que recupera datos de Salesforce gracias a JSForce<br/>Comunicación con personas de diversas partes del mundo a través del inglés", logo: process.env.PUBLIC_URL + "/experience/oktana.png", url: "https://www.oktana.com/"},
    {title: "Innovahora S.A.C.", subtitle: "Full stack web developer", period: "Sep. 2019 - Aug. 2020", description: "Desarrollo de sitios web y tiendas virtuales, utilizando JQuery y Bootstrap<br/>Desarrollo de API REST en CodeIgniter o Django para la obtención de datos alojados en bases de datos de MySQL o de SQL Server<br/>Integración con Mercado Libre, Mercado Pago y autenticación en Google y Facebook", logo: process.env.PUBLIC_URL + "/experience/innovahora.png", url: "https://innovahora.com/ima/"}
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
          <Box mt="3rem" w="100%">
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={8}
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