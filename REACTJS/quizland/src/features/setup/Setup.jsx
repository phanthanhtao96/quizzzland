import { Button, VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SetupField from '../../components/SetupField'
import SetupText from '../../components/SetupText'
import { useSetup } from '../../hooks/useSetup'
import { questionsSelector } from '../questions/questionsSlice'


// const title = [
//   {name: 'Chọn Chủ Đề', code: 'ccd', color: 'tomato'},
//   {name: 'Chọn Mức Độ', code: 'cmd', color: 'violet'},
//   {name: 'Chọn Kiểu Kết quả', code: 'kkq'}
// ]

const minmax = [
  {id: 'easy', name: 'Easy'},
  {id: 'medium', name: 'Medium'},
  {id: 'hard', name: 'Hard'}
]

const typeOptions = [
  {id: 'multiple', name: 'Multiple Choise'},
  {id: 'boolean' , name: 'True/False'}
]

function Setup() {
  const { data, isLoading, error } = useSetup()
  console.log(data);

  const { score } = useSelector(questionsSelector)
  console.log(score);

  const navigate = useNavigate()

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('submit...')
    navigate('/questions')

  }

  if (isLoading) {
    return (
      <>Loading...</>
    )
  }

  if (error) {
    return (
      <>{error}</>
    )
  }

  return (
    <form onSubmit={handleSubmitForm} style={{width: '100%'}}>
      {/* {data && data.results.map(item => item.category)} */}
      <VStack w='full' bgColor={'#38B2AC'} p={'15px'} spacing={50} borderRadius={'15'}>
        {/* {
          title.map((item, index) => <SetupField option={data?.trivia_categories} minmax={minmax} typeOptions={typeOptions} key={index} item={item}/>)
        } */}
        <SetupField option={data.trivia_categories} label="Chủ Đề" />
        <SetupField option={minmax} label="Mức Độ" />
        <SetupField option={typeOptions} label="Kết Quả" />
        <SetupText />
        <Button colorScheme='blue' type='submit'>Bắt Đầu</Button>
      </VStack>
    </form> 
  )
}

export default Setup