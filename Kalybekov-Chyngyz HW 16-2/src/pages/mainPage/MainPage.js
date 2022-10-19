import React from 'react';
import {useDispatch} from "react-redux";
import State from "../state/State";



const MainPage = () => {
    const dispatch = useDispatch();

    const decrement = () => {
        dispatch({type:"DECREMENT"})
    }

    const increment = () => {
        dispatch({type:"INCREMENT"})

    }

    return (
        <div>
            <State/>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};



export default MainPage;