import React from "react";
import { Link } from "react-router-dom"
import { Heading, Flex, Spacer, Box, IconButton,Badge } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa"
const Header = (props) => {
    console.log(props.addcart)
    const cartNum = props.addcart;

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={2}
            top= "0"
            bg="black"
            color="white"
            position = "sticky"
            width = "100%"
            {...props}
        >


            <Link to="/">
                <Box p="2">
                    <Heading
                        bgGradient="linear(to-l, #7928CA,#FF0080)"
                        bgClip="text"
                        fontSize="3xl"
                        as="h6"
                        size="md"
                        letterSpacing={"tighter"}
                    >
                        Food Fantasy
                    </Heading>
                </Box>
            </Link>
            <Spacer />
            <Link to="/cart">
                <Box>
                    <IconButton
                        variant="outline"
                        colorScheme="white"
                        aria-label="Cart Plus"
                        fontSize="20px"
                        icon={<FaCartPlus />}>
                    </IconButton>
                    <Badge mb="10" colorScheme="red" content='1'>
                           {cartNum}
                        </Badge>
                </Box>
            </Link>


        </Flex>
    );
};

export default Header;
