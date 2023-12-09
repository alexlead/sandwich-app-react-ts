import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'
import { addIngrediant, clearTable, Ingredient, INGREDIENT_VALUES } from '../redux/sandwich/sandwichSlice';

const Sandwich: React.FC = (): JSX.Element => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients)
    const dispatch = useDispatch();

    const handleAdd = (comp: Ingredient) => {
        dispatch(addIngrediant(comp));
    }

    const handleClear = () => {
        dispatch(clearTable())
    }

    return (
        <div>

            <div className="mySandwich">

                <h2>My sandwich</h2>
                <div >{
                    ingredients?.split(" ").map((ingredient, index) => (
                        <div className={"ingredient__spread sandwich " + ingredient} key={index}></div>
                    ))
                }</div>

            </div>

            <div className="table">

                <button onClick={handleClear}>Clear table</button>

            </div>

            <div className="ingredients">
                {

                    INGREDIENT_VALUES?.map((ingredient, index) => (
                        <div className="ingredient" key={index} onClick={() => handleAdd(ingredient)}>
                            <div className={"ingredient__spread sandwich " + ingredient}></div>
                            <div className="ingredient__title">{ingredient}</div>
                        </div>
                    ))

                }

            </div>




        </div>
    )
}

export default Sandwich