import React from "react";

import {
    Heading,
    Flex
} from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
const Header = (props) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="black"
            color="white"
            {...props}
        >

            <Flex align="center" mr={5}>
                <Heading bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text" fontSize="3xl" as="h6" size="md" letterSpacing={"tighter"}>
                    Food Fantasy
                </Heading>
            </Flex>

        </Flex>
    );
};

export default Header;
