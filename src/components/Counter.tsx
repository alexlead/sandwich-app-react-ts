import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';

const Counter: React.FC = (): JSX.Element => {

    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleMinus = (num: number) => {
        dispatch({ type: 'counter/minus', payload: num || 1 })
    }

    const handlePlus = (num: number) => {
        dispatch({ type: 'counter/plus', payload: num || 1 })
    }

  return (
    <div>
        <div>Counter: {counter} </div>
        <button onClick={()=>handleMinus(10)}>Minus 10</button>
        <button onClick={()=>handleMinus(1)}>Minus</button>
        <button onClick={()=>handlePlus(1)}>Plus</button>
        <button onClick={()=>handlePlus(10)}>Plus 10</button>


    </div>
  )
}

export default Counter