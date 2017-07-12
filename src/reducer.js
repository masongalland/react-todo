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
const DELETE_TASK = "DELETE_TASK";


function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TASK:
            return Object.assign({}, state, { todos: [...state.todos, {
                task: action.payload,
                description: '',
                completed: false
            }], newTaskInput: ''} )
        case TYPE_NEW_TASK:
            return Object.assign({}, state, {newTaskInput: action.payload})
        case COMPLETE_TASK:
            let filtered = state.todos.map((todo, index) => {
                if(index === action.payload){
                    todo.completed = true;
                } 
                return todo;
            });
            return Object.assign( {}, state, {todos: filtered} )
        case DELETE_TASK:
            let newTodoArr = state.todos.filter((todo, index) => {
                return index !== action.payload;
            })
            return Object.assign({}, state, {todos: newTodoArr})
        default:
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
    return {
        type: COMPLETE_TASK,
        payload: index
    }
}

export function deleteTask(index){
    return {
        type: DELETE_TASK,
        payload: index
    }
}


export default reducer;