const initialState = {
    todos: [
        {
            task: "Take the dog for a walk",
            description: "Take Georgie out again. He hasn't been walked in weeks.",
            completed: "false"
        }
    ],
    selected: null
}


function reducer(state=initialState, action){
    return state;
}

export default reducer;