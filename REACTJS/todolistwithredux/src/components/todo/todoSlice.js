const initialState = {
    todoList: []
}

const todoReducer = (state = initialState, action) => {
  // console.log({state, action})
    switch (action.type) {
        case 'todoList/addTodo':
            return { 
                ...state, 
                todoList: [
                    ...state.todoList, action.payload
                ]
            }
        
        case 'todoList/toggleTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList.map(todo => {
                        if (todo.id === action.payload) {
                            return {...todo, completed: !todo.completed}
                        }
                        return todo;
                    })
                ]
            }

        case 'todoList/removeTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList.filter(todo => todo.id !== action.payload)
                ]
            }

    default:
        return state
  }
} 

export default todoReducer;
