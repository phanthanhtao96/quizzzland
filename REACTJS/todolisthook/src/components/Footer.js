import React, { useContext } from 'react'
import { TodoContext } from '../contexts/todos'

function Footer() {
    const [todosState, dispatch] = useContext(TodoContext);
    const activeCount = todosState.todos.filter(todo => !todo.isCompleted).length
    const noTodoClass = todosState.todos.length === 0 ? 'hidden' : ''
    const itemsLeftText = ` item${activeCount !==1 ? 's' : ''} done `
    const getSelectedClass = filterName => {
        return todosState.filter === filterName ? 'selected' : ''
    }
    const changeFilter = (e, filterName) => {
        e.preventDefault()
        dispatch({
            type: 'changeFilter',
            payload: filterName
        })
    }

  return (
    <footer className={`footer ${noTodoClass}`}> 
        <span className="todo-count">
            <strong>{activeCount}</strong>
            {itemsLeftText}
        </span>

        <ul className="filters">
            <li>
                <a 
                    href="/" 
                    className={getSelectedClass('all')} 
                    onClick={(e) => {changeFilter(e, 'all')}}
                >
                    All
                </a>
            </li>
            <li>
                <a 
                    href="/" 
                    className={getSelectedClass('active')}
                    onClick={(e) => {changeFilter(e, 'active')}}
                >
                    Active
                </a>
            </li>
            <li>
                <a 
                    href="/" 
                    className={getSelectedClass('completed')}
                    onClick={(e) => {changeFilter(e, 'completed')}}
                >
                    Completed
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer;