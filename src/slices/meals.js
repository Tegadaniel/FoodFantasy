import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasErrors: false,
  meals: [],
}
const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
      getMeals: state => {
        state.loading = true
      },
      getMealsSuccess: (state, { payload }) => {
        state.meals = payload
        state.loading = false
        state.hasErrors = false
      },
      getMealsFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    },
  })
export const { getMeals, getMealsSuccess, getMealsFailure } = mealsSlice.actions

// A selector
export const mealsSelector = state => state.meals
console.log("What is meal selector: " + mealsSelector)

// The reducer
export default mealsSlice.reducer

// Asynchronous thunk action
export function fetchMeals() {
    return async dispatch => {
      dispatch(getMeals())
  
      try {
       // const response = await fetch('https://cors.bridged.cc/https://asm-dev-api.herokuapp.com/api/v1/food')
        const result = await axios(`https://cors.bridged.cc/https://asm-dev-api.herokuapp.com/api/v1/food`)
        //const data = await response.json()

        //console.log("data in the response" + JSON.stringify(result.data.data.meals))
  

        dispatch(getMealsSuccess((result.data.data.meals)))
      } catch (error) {
        dispatch(getMealsFailure())
      }
    }
  }