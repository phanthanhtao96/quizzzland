import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/todos';
import Todo from './Todo';

function Main() {
    const [todoState, dispatch] = useContext(TodoContext);
    const [editingId, setEditingId] = useState(null)

    const noTodoClassName = todoState.todos.length === 0 ? "hidden" : ""

    const getVisibleTodos = () => {
        if (todoState.filter === 'active') {
            return todoState.todos.filter(todo => !todo.isCompleted)
        } else if (todoState.filter === 'completed') {
            return todoState.todos.filter(todo => todo.isCompleted)
        }
        return todoState.todos; 
    }
        
    const visibleTodos = getVisibleTodos()
    console.log(visibleTodos)

    const isAllTodosSelected = todoState.todos.every(todo => todo.isCompleted)

    const onToggleAllTodos = (e) => {
        dispatch({
            type: 'toggleAll',
            payload: e.target.checked
        })
    }


  return (
    <section className={`main ${noTodoClassName}`}>
        <input  
            id="toggle-all" 
            className="toggle-all" 
            type="checkbox" 
            checked={isAllTodosSelected}
            onChange={onToggleAllTodos}
        />
        <label htmlFor="toggle-all">Mark all as completed</label>
        <ul className="todo-list">
            {
                visibleTodos.map((todo) =>  
                    (<Todo 
                        key={todo.id} 
                        todo={todo} 
                        isEditing={editingId === todo.id}
                        setEditting={setEditingId}
                    />))
            }
        </ul>
    </section>
  )
}

export default Main;