import React, {useState} from 'react';

const MainPage = () => {
        const [number1,setNumber1] = useState(0)
        const [number2,setNumber2] = useState(0)
    const [total,setTotal] = useState(number1 + number2)
    function  calculatePlus() {
            setTotal(number1 + number2)
    }
    function  calculateMinus() {
        setTotal(number1 - number2)
    }

    function  calculateMultiply() {
        setTotal(number1 * number2)
    }
function  calculateDelay() {
        setTotal(number1 / number2)
    }



    return (
        <div>
            <h1>{total}</h1>
            <input type="number" placeholder='0' onChange={e => setNumber1(+e.target.value)}/>
            <input type="number" placeholder='0' onChange={e => setNumber2(+e.target.value)}/>
            <button onClick={calculatePlus}>+</button>
            <button onClick={calculateMinus}>-</button>
            <button onClick={calculateMultiply}>*</button>
            <button onClick={calculateDelay}>/</button>
        </div>
    );
};

export default MainPage;