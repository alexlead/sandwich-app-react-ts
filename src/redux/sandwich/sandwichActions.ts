export type Ingredient = 'bread-top' | 'cheese' | 'ham' | 'cutlet' | 'steak' | 'bread-bottom'

export const INGREDIENT_VALUES:Ingredient[] = [ 'bread-top' , 'cheese' , 'ham' , 'cutlet' , 'steak' , 'bread-bottom' ];


type Action =
| { type: 'sandwich/addIngrediant', payload: Ingredient }
| { type: 'sandwich/clear'};

export default Action;