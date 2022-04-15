import {
    Text,
    Select,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { change_questions_category, change_questions_diff, change_questions_type } from '../features/questions/questionsSlice';


function SetupField({ label, option }) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
    
    switch (label) {
      case 'Chủ Đề':
        dispatch(change_questions_category(e.target.value));
        break;
      case 'Mức Độ':
        dispatch(change_questions_diff(e.target.value));
        break;
      case 'Kết Quả':
        dispatch(change_questions_type(e.target.value));
        break;
      default:
        return;
    }
    
  }

  return (
    <FormControl>
      <FormLabel htmlFor={label}>
        <Text color={'black'} fontWeight={700} textAlign={'center'}>{label}</Text>
      </FormLabel>
      <Select
        id={label}
        bg={'tomato'}
        // bg={item.code === 'ccd' ? 'tomato' : 'blue.400'}
        // name={
        //   item.code === 'ccd'? value.ccd : item.code === 'cmd' ? value.cmd : value.mm
        // }
        // value={
        //   item.code === 'ccd'? value.ccd : item.code === 'cmd' ? value.cmd : value.mm
        // }
        value={value}
        color='white'
        placeholder={`chọn ${label}`}
        size={'lg'}
        onChange={handleChange}
      >
        {/* {item.code === 'ccd' ? option.map(opt => (
          <option value={opt.id}>{opt.name}</option>
        )) : item.code === 'cmd' ?
        minmax.map(op => (
          <option value={op.id}>{op.name}</option>
        )) :
        typeOptions.map(typ => (
          <option value={typ.id}>{typ.name}</option>
        ))
        } */}
        {
          option.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })
        }
      </Select>
    </FormControl>
  )
}

export default SetupField