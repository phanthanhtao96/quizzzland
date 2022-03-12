import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/todos'
import { enterCode, escCode } from '../util/keycodes'

function Todo({todo, isEditing, setEditting}) {
    const [, dispatch] = useContext(TodoContext);
    const [textEdit, setTextEdit] = useState(todo.text)

    const editingClass = isEditing ? "editing" : ""
    const completedClass = !todo.isCompleted ? "completed" : ""

    const setTodoMode = () => {
        setEditting(todo.id)
    }

    const keyDownEditInput = (event) => {
        if (event.keyCode === enterCode) {
            dispatch({
                type: "changeTodo",
                payload: {id: todo.id, text: event.target.value}
            })
            setEditting(null)
        }
        if (event.keyCode === escCode) {
            setTextEdit(todo.text)
            setEditting(null)
        }
        return
    }

    const toggleTodo = () => {
        dispatch({
            type: "toggleTodo",
            payload: todo.id
        })
    }

    const removeTodo = () => {
        dispatch({
            type: "removeTodo",
            payload: todo.id
        })
    }


  return (
    <li className={`${editingClass} ${completedClass}`}>
        <div className="view">
            <input
                className="toggle" 
                type="checkbox" 
                value={todo.isCompleted}
                onChange={toggleTodo}
            />
            <label onDoubleClick={setTodoMode}>{todo.text}</label>
            <button 
                className="destroy" 
                onClick={removeTodo}
            >
            </button>
        </div>
        {isEditing && <input 
                        className="edit" 
                        value={textEdit} 
                        onChange={e => setTextEdit(e.target.value)}
                        onKeyDown={keyDownEditInput}
                      />}
    </li>
  )
}

export default Todo;