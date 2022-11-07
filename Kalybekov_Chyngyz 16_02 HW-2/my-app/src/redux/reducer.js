const initialState  = {
    title:'',
    count:0,
    users:[]
}


export  function reducer(state= initialState,action) {
    if(action.type ==="INCREMENT") {
        return {...state,count: state.count + 1}
    } else if (action.type === "DECREMENT") {
        return {...state,count: state.count - 1}

    }
    else if (action.type === "CREATE_USER") {
        console.log(action)
        return {...state,users: [...state.users,action.payload]}
    } else if (action.type === "CLEAR") {
        return {...state,users: []}
    }
    return state
}