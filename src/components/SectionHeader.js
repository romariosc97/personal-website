import React, { Fragment } from 'react';
import { Text } from "@chakra-ui/react";
function SectionHeader(props) {
    return (
        <Fragment>
            {
                props.gradient ? 
                (
                    <Text display="inline-block" fontSize="lg" fontWeight="500" className="text-multicolor-gradient">{props.gradient}</Text>
                ) : ""
            }
            
            {
                props.title ? 
                (
                    <Text textAlign="center" fontSize="5xl" fontWeight="600" mb="0.5rem">{props.title}</Text>
                ) : ""
            }
            {
                props.description ? 
                (
                    <Text maxW={{base: '25rem', lg: '40rem'}} textAlign="center" fontSize="lg" fontWeight="300">{props.description}</Text>
                ) : ""
            }
        </Fragment>
    )
}
export default SectionHeader;