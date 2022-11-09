import {configureStore} from "@reduxjs/toolkit";
import titleReducer from './titleSlice'
import counterReducer from  './counterSlice'



export default configureStore({
    reducer:{
        titleReducer,counterReducer
    }
})