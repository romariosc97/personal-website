import React, { useEffect } from 'react';
import { Box, Grid, GridItem, Text, Input, Textarea, Button } from "@chakra-ui/react";
function ContactForm() {
    useEffect(() => {

    }, []);

    return (
        <div>
            <form action="">
                <Box className="contact-form">
                    <Text display="inline-block" fontSize="lg" fontWeight="500" className="text-multicolor-gradient">
                        Have a comment?
                    </Text>
                    <Text fontSize="5xl" fontWeight="600">Leave a reply</Text>
                    <Grid
                        mt={{base: "1rem", lg: "2rem"}}
                        templateColumns="repeat(2, 1fr)"
                        gap={8}
                    >
                        <GridItem>
                            <Box>
                                <Input py="1.5rem" my="0.75rem" placeholder="Name*" required />
                                <Input py="1.5rem" my="0.75rem" placeholder="Email*" required />
                                <Input py="1.5rem" my="0.75rem" placeholder="Subject" required />
                                <Button
                                    my="0.75rem"
                                    fontWeight="400"
                                    fontSize="lg"
                                    bg="#4286f4"
                                    color="#F9F7F7"
                                    py="1.5rem"
                                    px="2rem"
                                    rounded="xl"
                                    border="3px solid #4286f4"
                                    _hover={{
                                        background: "#F9F7F7",
                                        color: "#4286f4",
                                    }}
                                >
                                    SUBMIT NOW
                                </Button>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Textarea py="0.75rem" rows="8" my="0.75rem" placeholder="Comment*" required />
                        </GridItem>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default ContactForm;