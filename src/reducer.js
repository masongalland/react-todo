const initialState = {
    todos: [
        {
            task: "Take the dog for a walk",
            description: "Take Georgie out again. He hasn't been walked in weeks.",
            completed: false
        },
        {
            task: "Take out the trash",
            description: "I forgot to take it out last week. It is piling up.",
            completed: false
        }
    ],
    selected: null,
    newTaskInput: ''
}

const TYPE_NEW_TASK = "TYPE_NEW_TASK";
const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";


function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TASK:
            console.log('new')
        
            return Object.assign({}, state, { todos: [...state.todos, {
                task: action.payload,
                description: '',
                completed: false
            }], newTaskInput: ''} )
        case TYPE_NEW_TASK:
            console.log('typing')
        
            return Object.assign({}, state, {newTaskInput: action.payload})
        case COMPLETE_TASK:
            let filtered = state.todos.map((todo, index) => {
                if(index === action.payload){
                    todo.completed = true;
                } 
                return todo;
            });
            return Object.assign( {}, state, {todos: filtered} )
        default:
            console.log('default')
        
            return state;
    }
    
}

export function changeTaskInput(value){
    return {
        type: TYPE_NEW_TASK,
        payload: value
    }
}

export function addTask(task){
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function markCompleted(index){
    // console.log(index)
    return {
        type: COMPLETE_TASK,
        payload: index
    }
}


export default reducer;