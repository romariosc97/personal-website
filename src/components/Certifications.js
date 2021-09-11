import React, { useState, useEffect, Fragment } from 'react';
import { Box, Image, Link, Skeleton } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";

import CertificationService from "../services/CertificationService";

function Certifications() {
    const [certifications, setCertificacions] = useState([]);
    useEffect(() => {
        const getCertifications = async () => {
            const response = await CertificationService.getCertifications();
            setCertificacions(response.data.data);
        };
        getCertifications();
    }, []);
    const header = {
        gradient: "Especializaciones",
        title: "CERTIFICACIONES",
        description: "Obtenidas después de estudiar y aprobar los exámenes requeridos"
    };
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} color="#112D4E">
                <SectionHeader {...header} />
                <Box className="certifications" w="100%" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" mb="0.5rem" mt="4rem">
                    {
                        certifications.length > 0 ?
                        certifications.map((v, k) => {
                            return(
                                <Box key={k} w={'8rem'}>
                                    <Link _focus={{boxShadow: "none"}} target="_blank" href={v.url}>
                                        <Image w="100%" src={process.env.REACT_APP_API_URL + v.image} alt={v.name} />
                                    </Link>
                                </Box>
                            )
                        }) : 
                        <Fragment>
                            <Skeleton w={'8rem'} height="8rem" />
                            <Skeleton rounded="full" w={'8rem'} height="8rem" />
                            <Skeleton w={'16rem'} height="4rem" />
                            <Skeleton rounded="full" w={'8rem'} height="8rem" />
                            <Skeleton w={'8rem'} height="8rem" />
                        </Fragment>
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Certifications;