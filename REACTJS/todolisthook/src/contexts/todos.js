import { createContext, useReducer } from "react";

const initalState = {
    todos: [],
    filter: 'all'
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'addTask': {
            const newTask = {
                id: Math.random().toString(16),
                text: action.payload,
                isCompleted: true
            }
            return {
                ...state,
                todos: [...state.todos, newTask]
            }
        }
        case 'toggleAll': {
            const updatedTodos = state.todos.map(todo => ({
                    ...todo,
                    isCompleted: action.payload
            }))
            return {
                ...state,
                todos: updatedTodos
            }
        }
        case 'changeFilter': {
            return {
                ...state,
                filter: action.payload
            }
        }
        case 'changeTodo': {
            const updatedChangeTodos = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        text: action.payload.text
                    }
                }
                return todo
            });
            return {
                ...state,
                todos: updatedChangeTodos
            }
        }
        case 'toggleTodo': {
            const toggleChangeTodos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }
                return todo
            });
            return {
                ...state,
                todos: toggleChangeTodos
            }
        }
        case 'removeTodo': {
            const newTodo = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: newTodo
            }
        }
    
        default:
            return state;
    }
}

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const value = useReducer(reducer, initalState)

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}