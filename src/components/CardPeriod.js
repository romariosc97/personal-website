import React, { Fragment } from 'react';
import { Box, Text, Badge, Image, Link, List, ListItem } from "@chakra-ui/react";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CardPeriod(props) {
    
    const normalizeText = (text) => {
        let tmp = [];
        const descriptionArray = text.split('<br/>');
        descriptionArray.forEach((value, key) => {
            tmp.push((
                <Fragment key={key}>
                    <ListItem>
                        <Box display="inline" mr="0.5rem"><FontAwesomeIcon size="1x" icon={faCheck} /></Box>
                        {value}
                    </ListItem>
                </Fragment>
            ));
        });
        return tmp;
    };
    return (
        <Fragment>
            <Box w="100%" borderWidth="1px" borderRadius="lg" bg="white">
                <Box py="1.5rem" px="2rem">
                    <Box display="flex" >
                        <Box flex="1 1 0%">
                            <Text fontSize="xl" fontWeight="500">{props.data.institution_name || props.data.company_name}</Text>
                            <Text mb="0.5rem" fontSize="md" fontWeight="400">{props.data.title || props.data.position}</Text>
                            <Badge fontWeight="600" mb="1rem" borderRadius="full" px="0.5rem" py="0.125rem" bg="#3F72AF" color="white">{`${props.data.period_start} - ${props.data.period_end}`}</Badge>
                        </Box>
                        <Box>
                            <Link target="_blank" href={props.data.institution_url}>
                                <Image className="img-grow" src={process.env.PUBLIC_URL + "/educationAndExperience/" + (props.data.institution_image || props.data.company_image)} w="2.5rem" h="2.5rem" objectFit="contain" />
                            </Link>
                        </Box>
                    </Box>
                    <List fontWeight="300" fontSize="sm" spacing={3}>
                        {normalizeText(props.data.description)}
                    </List>
                </Box>
            </Box>
        </Fragment>
    )
}

export default CardPeriod;