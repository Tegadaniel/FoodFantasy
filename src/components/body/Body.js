    import React, { useEffect, useState } from 'react'
    import Header from '../header/Header'
    import axios from 'axios'
    import { SimpleGrid } from "@chakra-ui/react";
    import FoodBody from '../foodBody/FoodBody'

    function Body() {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
    const result = await axios(`https://asm-dev-api.herokuapp.com/api/v1/food`)
    console.log(result.data.data.meals)
    setItems(result.data.data.meals)
    }

    useEffect(() => {
    fetchItems()
    }, [])
    return (
    <div>
    <Header />
    <SimpleGrid p="5" columns={[2, null, 3]} spacing="6px">
        {items.map((item) => (
            <div  key={item.id}>
                <FoodBody item={item}></FoodBody>
            </div>
        ))}
     </SimpleGrid>

    </div>
    )
    }

    export default Body

