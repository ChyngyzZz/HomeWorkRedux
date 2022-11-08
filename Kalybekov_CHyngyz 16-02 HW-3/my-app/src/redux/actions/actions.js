import {types} from "../../types";

export const  titleAction = () => {
    return {
        type:types.CHANGE_TITLE
    }
}


export const titleValueAction = (name) => {
    return {
        type:types.CHANGE_TITLE_VALUE,
        payload:name
    }
}

export const increment = () => {
    return{
        type:types.INCREMENT,
    }
}