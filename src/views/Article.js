import React, { useEffect } from 'react';
import { Box, Text, Image } from "@chakra-ui/react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import CommentForm from "../components/CommentForm";
import { faClock, faUser, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Error404() {
    useEffect(() => {

    }, []);
    const backgroundProps = {
        style: {backgroundImage: `url('${process.env.PUBLIC_URL + "/blog/breadcrumb/blog-2.jpg"}')`},
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    };
    const description = " ";
    return (
        <div>
            <Box position="relative" className="overlay-dark" {...backgroundProps}>
                <Navbar hover="blue" color="#f9f7f7" />
                <Breadcrumb description={description} title="EL INICIO DE UNA CARRERA COMO DESARROLLADOR WEB" color="#f9f7f7"/>
                <Box pb="5rem" display="flex" justifyContent="center">
                    <Box mr="2.5rem" zIndex="1">
                        <FontAwesomeIcon color="#FFF" size="lg" icon={faClock} />
                        <Text ml="0.75rem" as="span" color="#FFF" fontSize="lg" fontWeight="400">May 18, 2021</Text>
                    </Box>
                    <Box mr="2.5rem" zIndex="1">
                        <FontAwesomeIcon color="#FFF" size="lg" icon={faUser} />
                        <Text ml="0.75rem" as="span" color="#FFF" fontSize="lg" fontWeight="400">Romario Sarmiento</Text>
                    </Box>
                    <Box mr="2.5rem" zIndex="1">
                        <FontAwesomeIcon color="#FFF" size="lg" icon={faComment} />
                        <Text ml="0.75rem" as="span" color="#FFF" fontSize="lg" fontWeight="400">15 Comments</Text>
                    </Box>
                </Box>
            </Box>
            <Box pt={{base: '1rem', lg: '6rem'}} pb={{base: '1rem', lg: '2.5rem'}} px={{base: '1rem', lg: '10rem'}}>
                <Text mb="2rem" color="#112D4E" fontSize="md" fontWeight="300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.</Text>
                <Box mb="2rem">
                    <Image w="100%" rounded="lg" src={process.env.PUBLIC_URL + "/blog/content/blog-1.jpg"} objectFit="contain" />
                </Box>
                <Text mb="2rem" color="#112D4E" fontSize="md" fontWeight="300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.</Text>
                <Text mb="2rem" color="#112D4E" fontSize="md" fontWeight="300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. It re are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedeed eedhumour, or randomised words which don't look even slightly believable.</Text>
            </Box>
            <Box pb={{base: '1rem', lg: '6rem'}} px={{base: '1rem', lg: '12rem'}}>
                <CommentForm />
            </Box>
            <Footer />
        </div>
    )
}

export default Error404;