import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const UserReducer = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const clear = () => {
        dispatch({type: "CLEAR"})
    }

    return (
        <div>
            <button onClick={clear}>clear</button>
            <ul>
                {
                    users.length > 0
                    ?
                        users.map(user => <li>{user}</li>)
                        :
                        <li>пустой список</li>
                }
            </ul>

        </div>
    );
};

export default UserReducer;