export type Inggredient = 'bread' | 'butter' | 'cheese' | 'salami'
type Action =
| { type: 'sandwich/addIngrediant', payload: Inggredient }
| { type: 'sandwich/clear'};

export default Action;