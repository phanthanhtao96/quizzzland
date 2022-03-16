import { createSelector } from "reselect";

export const todoState = state => state.todoReducer.todoList;

export const filterSearchState = state => state.filterReducer.filter.search;

export const filterStatusState = state => state.filterReducer.filter.status;

export const filterPriorityState = state => state.filterReducer.filter.priotity;

export const todoReminingSelector =createSelector(
    todoState,
    filterSearchState,
    filterStatusState,
    filterPriorityState,

    (todoState,filterSearchState, filterStatusState, filterPriorityState) => {
        return todoState.filter(todo => {
            if(filterStatusState === "All"){
                return filterPriorityState.length
                    ? (todo.name.includes(filterSearchState) && filterPriorityState.includes(todo.priotity)) 
                    : todo.name.includes(filterSearchState)   
            }
            else {
                return (
                    todo.name.includes(filterSearchState) &&
                    (filterStatusState === "Completed" ? todo.completed === true : todo.completed === false) && (filterPriorityState.length ? filterPriorityState.includes(todo.priotity) : false)
                )
            }
        });
    }
)



