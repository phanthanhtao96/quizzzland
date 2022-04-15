import React from 'react'
import {
    Text,
    Input,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { change_questions_number } from '../features/questions/questionsSlice'

function SetupText() {
  const dispatch = useDispatch()

  const handleChangeText = (e) => {
    console.log(e.target.value)
    dispatch(change_questions_number(e.target.value))
  }


  return (
    <FormControl>
        <FormLabel htmlFor='text'>
        <Text color={'tomato'} fontWeight={700} textAlign={'center'}>Số Lượng Câu Hỏi</Text>
        </FormLabel>
        <Input
            id='text'
            defaultValue={4}
            onChange={handleChangeText}
            type='number'
            variant='filled' placeholder='Number questions...' 
            _placeholder={{ opacity: 0.4, color: 'tomato' }}
        />
    </FormControl>
  )
}

export default SetupText    