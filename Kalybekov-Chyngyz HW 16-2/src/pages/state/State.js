import React from 'react';
import {useSelector} from "react-redux";

const State = () => {
    const state = useSelector(state => state.count)
    return (
        <div>
            <h1>{state}</h1>
        </div>
    );
};

export default State;