import React, { useEffect } from 'react';
import { Box, Grid, GridItem, Text, Link, Input, Textarea, Button, Image } from "@chakra-ui/react";
import ContactFormImg from'../assets/img/contact-form.jpg';
function ContactForm() {
    useEffect(() => {

    }, []);

    return (
        <div>
            <form id="contactForm" action="">
                <Box className="contact-form" py={{base: '1rem', lg: '6rem'}} px={{base: '1rem', lg: '10rem'}}>
                    <Grid
                        templateColumns="repeat(2, 1fr)"
                        gap={16}
                    >
                        <GridItem>
                            <Text display="inline-block" fontSize="lg" fontWeight="500" className="text-multicolor-gradient">
                                Saluda
                            </Text>
                            <Text fontSize="5xl" fontWeight="600">Contacto</Text>
                            <Box my="0.25rem">
                                <Text color="#757575" display="inline" fontSize="sm" fontWeight="400" mr="1rem">Llámame:</Text>
                                <Link className="contact-link" fontWeight="600" fontSize="lg" href="tel:+51955882023">
                                    +51 955 882 023
                                </Link>
                            </Box>
                            <Box my="0.25rem">
                                <Text color="#757575" display="inline" fontSize="sm" fontWeight="400" mr="1rem">Contáctame:</Text>
                                <Link className="contact-link" fontWeight="600" fontSize="lg" href="mailto:romariosc15@outlook.com">
                                    romariosc15@outlook.com
                                </Link>
                            </Box>
                            <Box mt={{base: "1rem", lg: "2rem"}}>
                                <Input py="1.5rem" my="0.75rem" placeholder="Tus nombres*" required />
                                <Input py="1.5rem" my="0.75rem" placeholder="Tu correo electrónico*" required />
                                <Input py="1.5rem" my="0.75rem" placeholder="Asunto" required />
                                <Textarea rows="6" my="0.75rem" placeholder="Tu mensaje*" required />
                                <Button
                                    my="0.75rem"
                                    fontWeight="400"
                                    fontSize="lg"
                                    bg="#4286f4"
                                    color="#F9F7F7"
                                    py="1.5rem"
                                    px="2rem"
                                    rounded="xl"
                                    _hover={{
                                        background: "#307de4",
                                        color: "#F9F7F7",
                                    }}
                                >
                                    ENVIAR
                                </Button>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Image rounded="lg" src={ContactFormImg} objectFit="contain" />
                        </GridItem>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default ContactForm;