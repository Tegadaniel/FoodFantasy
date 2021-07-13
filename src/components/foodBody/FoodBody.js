import React from 'react'
import { Box, Button, Image, Text, Flex, Spacer } from "@chakra-ui/react";
// import Truncate from 'react-truncate';
import { AddIcon } from '@chakra-ui/icons'

const FoodBody = ({ item, addCart}) => {
    return (

        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign="center"
            boxShadow="md"
            m="8px"
            p="8px"
            border="1px"
            rounded="10px"
            borderColor="gray.300"
        >
            <Image
                rounded="0.5rem"
                src={item.strMealThumb}
                alt={item.title}
            />

            <Text
                as="span"
                mt="1"
                color="gray.600"
                fontSize="sm">
                Meal Name: {item.strMeal}
            </Text>
            
        <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
        >Description: {item.description}</Text>

            {/* <Truncate 
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight" lines={3} ellipsis={<span>... <a href={item.description}>Read more</a></span>}>
                Description: {item.description}
            </Truncate> */}
            <Text
                as="span"
                mt="1"
                color="gray.600"
                fontSize="sm">
                Price: {item.price}/plate
            </Text>
            <Flex>
            <Spacer/>
            <Box mt="1">
                <Button onClick ={() => addCart(item)}>
                <AddIcon/>
                </Button>
               </Box>
            </Flex>
        </Box>
    )
}

export default FoodBody
