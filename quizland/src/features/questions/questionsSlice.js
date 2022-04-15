import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions_category: '',
  questions_diff: '',
  questions_type: '',
  questions_number: 4,
  score: 0
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    change_questions_category: (state, action) => {
      return {
        ...state,
        questions_category: action.payload
      } 
    },
    change_questions_diff: (state, action) => {
      return {
        ...state,
        questions_diff: action.payload
      } 
    },
    change_questions_type: (state, action) => {
      return {
        ...state,
        questions_type: action.payload
      } 
    },
    change_questions_number: (state, action) => {
      return {
        ...state,
        questions_number: action.payload
      }
    },
    plus_score: (state, action) => {
      return {
        ...state,
        score: action.payload
      }
    }

  }
});

export const { 
  change_questions_category,
  change_questions_diff,
  change_questions_type,
  change_questions_number,
  plus_score
 } = questionsSlice.actions

export const questionsSelector = state => state.questionsReducer

const questionsReducer = questionsSlice.reducer
export default questionsReducer;