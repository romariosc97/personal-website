import React, { } from 'react';
import { Link as LinkUI } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
function ButtonRouter(props) {
    let hash = props.hash,
        pathname = props.pathname,
        children = props.children;
    let isExternal = "external" in props ? true : false;
    const content = (
        isExternal ? children :
        <Link className="button-router" to={{
            pathname: pathname ? pathname : "",
            hash: hash ? hash : ""
        }}>
            {children}
        </Link>
    );
    return (
        <LinkUI
            as={isExternal ? "" : "button"}
            target={isExternal ? "_blank" : ""}
            href={isExternal ? pathname : ""}
            padding={isExternal ? "0.75rem 1.5rem" : ""}
            width={isExternal ? "fit-content" : ""}
            zIndex="2"
            mt="2rem"
            fontWeight="400"
            fontSize="lg"
            bg="#4286f4"
            color="#FFF"
            rounded="xl"
            _hover={{
                background: "#307de4",
                color: "#F9F7F7",
            }}
        >
            {content}
        </LinkUI>
    )
}
export default ButtonRouter;