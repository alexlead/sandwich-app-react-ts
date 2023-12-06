import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';

const Counter: React.FC = (): JSX.Element => {

    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleMinus = () => {
        dispatch({ type: 'counter/minus', payload: 1 })
    }

    const handlePlus = () => {
        dispatch({ type: 'counter/plus', payload: 1 })
    }

  return (
    <div>
        <div>Counter: {counter} </div>
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handlePlus}>Plus</button>
    </div>
  )
}

export default Counter