import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {changeNumberDecrement, changeNumberIncrement} from "../../redux/store/counterSlice";

const CountPage = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.count)
    const IncrementFunc = () => {
        dispatch(changeNumberIncrement())
    }

    const DecrementFunc = () => {
        dispatch(changeNumberDecrement())
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={IncrementFunc}>increment</button>
            <button onClick={DecrementFunc}>decrement</button>
        </div>
    );
};

export default CountPage;