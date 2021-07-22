import React, { useEffect } from 'react';
import { Box, Image, Link } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";
function Certifications() {
    const certifications = [
        {src: process.env.PUBLIC_URL + "/certifications/platform-developer-i.jpg", alt: 'Salesforce Certified Platform Developer I', width: '9rem', url: 'https://drive.google.com/file/u/2/d/1jmr1cIn0wd1Cu4mSz74BNqkEz9y32AaB/view?usp=sharing'},
        {src: process.env.PUBLIC_URL + "/certifications/javascript-developer-i.png", alt: 'Salesforce Certified Javascript Developer I', width: '6rem', url: 'https://drive.google.com/file/d/1LT7Qj_B8SWC4mrio3YpTx-1LxGP4Yh-s/view'},
        {src: process.env.PUBLIC_URL + "/certifications/scrum-fundamentals.png", alt: 'Scrum Fundamentals', width: '10rem', url: 'https://drive.google.com/file/d/1ZApTvKd_RiMqWJ29pRdi5lk9tcVMG2b5/view'}
    ];
    useEffect(() => {

    }, []);
    const header = {
        gradient: "Especializaciones",
        title: "CERTIFICACIONES"
    };
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{base: '1rem', sm: '2rem', lg:'10rem'}} py={{base: '1rem', sm: '2rem', lg: '5rem'}} color="#112D4E">
                <SectionHeader {...header} />
                <Box className="certifications" w="100%" display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" mb="0.5rem" mt="3rem">
                    {
                        certifications.map((v, k) => {
                            return(
                                <Box key={k} w={v.width}>
                                    <Link target="_blank" href={v.url}>
                                        <Image w="100%" src={v.src} alt={v.alt} />
                                    </Link>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Certifications;