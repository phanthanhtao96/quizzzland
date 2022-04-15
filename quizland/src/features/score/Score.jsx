import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  VStack,
  Button,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { plus_score, questionsSelector } from '../questions/questionsSlice'
import { useNavigate } from 'react-router-dom'

function Score() {
  const { score } = useSelector(questionsSelector)
  console.log(score);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBack = () => {
    dispatch(plus_score(0))
    navigate('/')
  }

  return (
    <VStack>
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          {
            score === 0 ? 'Rất tiếc bạn chưa trả lời đúng câu nào!!!' : `Chúc mừng! Bạn được ${score} điểm ✅`
          }
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Cảm ơn bạn mời bạn quay trở lại màn hình chính để chơi tiếp!
        </AlertDescription>
      </Alert>
      <Button colorScheme='teal' variant='solid' onClick={handleBack}>
        Chơi Lại
      </Button>
    </VStack>
  )
}

export default Score