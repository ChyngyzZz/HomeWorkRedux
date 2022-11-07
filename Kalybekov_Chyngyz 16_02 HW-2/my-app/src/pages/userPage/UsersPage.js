import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserReducer from "../../components/userReducer/UserReducer";
import {type} from "@testing-library/user-event/dist/type";

const UsersPage = () => {
    const [user,setUser] = useState('')
    const dispatch = useDispatch()
    const handeUser = e => {
        setUser(e.target.value)
    }

    const createUser = () => {
       dispatch({type:"CREATE_USER",payload:user})
        setUser('')
    }
    return (
        <div>
            <h1>add user</h1>
            <input type="text" onChange={handeUser} value={user} />
            <button onClick={createUser}>add user</button>

           <UserReducer/>
        </div>
    );
};

export default UsersPage;