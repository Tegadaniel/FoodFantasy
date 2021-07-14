import React from 'react'
import { Box, Image, Text, Flex, Spacer, IconButton } from "@chakra-ui/react";
// import Truncate from 'react-truncate';
import { AddIcon } from '@chakra-ui/icons'

const FoodBody = ({ meal}) => {
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
                src={meal.strMealThumb}
                alt={meal.title}
            />

            <Text
                as="span"
                mt="1"
                color="gray.600"
                fontSize="sm">
                Meal Name: {meal.strMeal}
            </Text>
            
        <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
        >Description: {meal.description}</Text>

            {/* <Truncate 
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight" lines={3} ellipsis={<span>... <a href={meal.description}>Read more</a></span>}>
                Description: {meal.description}
            </Truncate> */}
            <Text
                as="span"
                mt="1"
                color="gray.600"
                fontSize="sm">
                Price: {meal.price}/plate
            </Text>
            <Flex>
            <Spacer/>
            
    <IconButton
    // mt="1" onClick ={() => addCart(meal)}
    variant="outline"
    colorScheme="black"
    aria-label="Cart Plus"
    fontSize="20px"
    icon={ <AddIcon/>}></IconButton>
            {/* <Box mt="1"> */}
                {/* <Button  mt="1" onClick ={() => addCart(meal)}>
                <AddIcon/>
                </Button> */}
               {/* </Box> */}
            </Flex>
        </Box>
    )

}

export default FoodBody
