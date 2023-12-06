import sandwichAction from "./sandwichActions";
import { ISandwichState } from "./sandwichState";

const initialState = {
    ingredients: ''
}

export default function sandwichReducer(
    state: ISandwichState = initialState,
    action: sandwichAction
): ISandwichState {

    switch( action.type) {

        case 'sandwich/addIngrediant':
    
            return { ...state, ingredients: `${state.ingredients} ${action.payload}`};

        case 'sandwich/clear':
            return { ...state, ingredients: ''};

        default:
            return state;
    }

}