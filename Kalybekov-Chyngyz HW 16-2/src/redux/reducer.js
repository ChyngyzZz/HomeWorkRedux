
let initialState = {count:0}

export function  reducer (state = initialState,action) {

    if(action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        };
    }
    if(action.type === 'DECREMENT') {
        return {
            count: state.count - 1
        };
    }
else return state

}



// const intialstate= {
//     title: "I am old tite"
// }
//
// export  function reducer (state = intialstae,action) {
//
//     if(action.type ==="CHANGE_TITLE") {
//
//         return{...state, title:"i am new title"}
//     }
//     else if(action.type === 'CLEAN_TITLE') {
//         return {...state,title: ''}
//     }
//     else if(action.type === "INCREMENT") {
//
//     }
//     else return state
//
// }