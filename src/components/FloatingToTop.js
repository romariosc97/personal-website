import React, { useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function FloatingToTop() {
    const top = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    useEffect(() => {

    }, []);

    return (
        <div>
            <Box className="floating-to-top" cursor="pointer" onClick={top} position="fixed" bottom="2rem" right="2rem" bg="#3F72AF" border="1px solid #3F72AF" py={{base: "0.5rem", lg: "0.85rem"}} px={{base: "0.5rem", lg: "1rem"}} color="#F9F7F7" borderRadius="full">
                <FontAwesomeIcon size="lg" icon={faArrowUp} />
            </Box>
        </div>
    )
}

export default FloatingToTop;