import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Ingredient = 'bread-top' | 'cheese' | 'ham' | 'cutlet' | 'steak' | 'bread-bottom'

export const INGREDIENT_VALUES:Ingredient[] = [ 'bread-top' , 'cheese' , 'ham' , 'cutlet' , 'steak' , 'bread-bottom' ];


const initialState = {
    ingredients: ''
}

export const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngrediant: (state, action: PayloadAction<Ingredient>) => {
            state.ingredients += " " + action.payload;
        },
        clearTable: (state) => {
            state.ingredients = '';
        }
    }
})

export const { addIngrediant, clearTable } = sandwichSlice.actions;

export default sandwichSlice.reducer;