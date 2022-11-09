import React, {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {changeTitle, changeTitleWithParams} from "../../redux/store/titleSlice";

const MainPage = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const title = useSelector(state => state.titleReducer.title)

    const changeTitleFunc = () => {
        dispatch(changeTitle())
    }

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const changeInputParams = () => {
        dispatch(changeTitleWithParams(input))
    }

    const clearInput = () => {
        dispatch(changeTitleWithParams(''))
        setInput('')
    }
    // const changeWithParamsFunc = () => {
    //     dispatch(changeTitleWithParams('Chikesh'))
    // }
    return (
        <div>
            <h1>{title}</h1>
            <input type="text" onChange={changeInput} value={input}/>
            <button onClick={changeInputParams}>add from input</button>
            <button onClick={changeTitleFunc}>change title</button>
            <button onClick={clearInput}>clear</button>
            {/*<button onClick={changeWithParamsFunc}>change with params</button>*/}
        </div>
    );
};

export default MainPage;