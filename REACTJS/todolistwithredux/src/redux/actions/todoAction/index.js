
export const addTodoACtion = (data) => {
    return {
       type: 'todoList/addTodo',
        payload: data 
    }  
}

export const toggleTodo = (todo) => {
    return {
        type: 'todoList/toggleTodo',
        payload: todo
    }
}

export const removeTodo = (todo) => {
    return {
        type: 'todoList/removeTodo',
        payload: todo
    }
}
