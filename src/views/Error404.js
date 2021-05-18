import React, { useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Error404() {
    useEffect(() => {

    }, []);

    return (
        <div>
            <Navbar bg="#dbe2ef" color="#3f72af" />
            <Box bg="#dbe2ef" pb={{base: '1rem', lg: '6rem'}} pt={{base: '1rem', lg: '2rem'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="#112D4E">
                <Text className="text-blue-gradient" textAlign="center" fontSize="10rem" fontWeight="700" mb={{base: "0rem", lg: "-2.5rem"}}>404!</Text>
                <Text textAlign="center" fontSize="5xl" fontWeight="500">Page not found</Text>
                <Text textAlign="center" fontSize="xl" fontWeight="300" mb="2rem">The page you were looking for could not be found.</Text>
                <Link className="blue-button button-lg" to="/">
                    BACK TO HOME
                </Link>
            </Box>
            <Footer />
        </div>
    )
}

export default Error404;