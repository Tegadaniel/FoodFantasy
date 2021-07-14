    import React, { useEffect, useState } from 'react'
    // import axios from 'axios'
    import { SimpleGrid } from "@chakra-ui/react";
    import FoodBody from '../foodBody/FoodBody'
    // import Header from '../header/Header';
    // import Cart from '../cart/Cart';
    import { useDispatch, useSelector } from 'react-redux'
    import { fetchMeals, mealsSelector } from '../../slices/meals'

    const Body = ()=> {
    const dispatch = useDispatch()
    const { meals, loading, hasErrors } = useSelector(mealsSelector)
      console.log("Meals here: " + meals)
        useEffect(() => {
          dispatch(fetchMeals())
        }, [dispatch])

        const renderMeals = () =>{
            if (loading) return <p>Loading meals...</p>
            if (hasErrors) return <p>Cannot display meals...</p>

               
            return  <SimpleGrid  p="5" columns={[1, null, 3]} spacing="6px">
            {meals.map((meal) => (
                <div  key={meal.id}>
                    <FoodBody meal={meal}></FoodBody>
                </div>
            ))}
         </SimpleGrid>
        }













    // const [items, setItems] = useState([]);
    // const [cart, setCart] = useState([]);

    // const fetchItems = async () => {
    // const result = await axios(`https://cors.bridged.cc/https://asm-dev-api.herokuapp.com/api/v1/food`)
    // console.log(result.data.data.meals)
    // setItems(result.data.data.meals)
    // }
    // const addToCart =  (items) =>{
    //    const _cart = [...cart];
    //    _cart[_cart.length] = items;
    //    console.log(_cart)

    //     setCart(_cart)
    // }

    // useEffect(() => {
    // fetchItems()
    // }, [])
    //     const styles = {
    //         position :"absolute",
    //         top: "70px"
    //     }
    //     const cartStyle = {
    //         display: "none"
    //     }
    return (
    <div >
    {/* <SimpleGrid style ={styles} p="5" columns={[1, null, 3]} spacing="6px">
        {items.map((item) => (
            <div  key={item.id}>
                <FoodBody item={item} addCart = {addToCart}></FoodBody>
            </div>
        ))}
     </SimpleGrid> */}
        {renderMeals()}
    </div>
    )
    }

    export default Body

