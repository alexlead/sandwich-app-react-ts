import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'
import { Inggredient } from '../redux/sandwich/sandwichActions';

const Sandwich: React.FC = (): JSX.Element => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients)
    const dispatch = useDispatch();

    const handleAdd = ( comp: Inggredient ) => {
        dispatch({type:'sandwich/addIngrediant', payload: comp})
    }

    const handleClear = () => {
        dispatch({type: 'sandwich/clear'})
    }

    return (
        <div>

            <h1>Choose your sandwich:</h1>
            <p>Sandwich: {ingredients}</p>
            <button onClick={()=>handleAdd('bread')}>Add bread</button>
            <button onClick={()=>handleAdd('cheese')}>Add cheese</button>
            <button onClick={()=>handleAdd('butter')}>Add butter</button>
            <button onClick={()=>handleAdd('salami')}>Add salsmi</button>
            <button onClick={handleClear}>Delete All</button>

        </div>
    )
}

export default Sandwich