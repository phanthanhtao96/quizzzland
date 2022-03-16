import { combineReducers } from "redux";
import filterReducer from "../../components/filters/filterSlice";
import todoReducer from "../../components/todo/todoSlice";


const rootReducer = combineReducers({
    filterReducer: filterReducer,
    todoReducer: todoReducer
})

export default rootReducer;