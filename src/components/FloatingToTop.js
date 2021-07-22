import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function FloatingToTop() {
    const top = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    const [arrowStatus, setArrowStatus] = useState(false);
    const onScroll = () => {
        const scrollY = window.scrollY;
        if(scrollY >= 300){
            setArrowStatus(true);
        }else{
            setArrowStatus(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, []);

    return (
        <div>
            <Box 
                className={"shadow-lg floating-to-top" + (arrowStatus ? " active" : "")}
                onClick={top}
                position="fixed"
                bottom="2rem"
                right="2rem"
                bg="#4286f4"
                py={{base: "0.5rem", lg: "0.85rem"}}
                px={{base: "0.5rem", lg: "1rem"}}
                color="#F9F7F7"
                borderRadius="xl"
                cursor="pointer"
            >
                <FontAwesomeIcon size="lg" icon={faArrowUp} />
            </Box>
        </div>
    )
}

export default FloatingToTop;