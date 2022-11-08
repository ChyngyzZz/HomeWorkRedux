import {types} from "../../types";

const initialState = {
    title:"i am old title",
    number:0
}


export const titleReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state,title: 'I am new title'}
        case types.CHANGE_TITLE_VALUE:
            return {...state,title: action.payload  }
        default:
            return state
    }
}