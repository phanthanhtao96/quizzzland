import React, { useEffect, useState } from 'react'
import { VStack, Text, Center, Tag, TagLabel, Avatar, StackDivider } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { plus_score, questionsSelector } from './questionsSlice';
import { useQuestions } from '../../hooks/useQuestions';
import { useNavigate } from 'react-router-dom';


const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

function Questions() {
  const {
    questions_category, 
    questions_diff, 
    questions_type, 
    questions_number, 
    score
  } = useSelector(questionsSelector)

  let apiUrl = `https://opentdb.com/api.php?amount=${questions_number}`
  if(questions_category) apiUrl = apiUrl.concat(`&category=${questions_category}`)
  if(questions_diff) apiUrl = apiUrl.concat(`&difficulty=${questions_diff}`)
  if(questions_type) apiUrl = apiUrl.concat(`&type=${questions_type}`)

  const {data, isLoading, error} = useQuestions(apiUrl)
  console.log(data?.results);

  const [questionsIndex, setQuestionsIndex] = useState(0)
  const [options, setOptions] = useState([])
  console.log(options);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(data?.results.length) {
      const ques = data.results[questionsIndex]
      let answers = [...ques.incorrect_answers]
      answers.splice(getRandom(ques.incorrect_answers.length), 0, ques.correct_answer)
      setOptions(answers)
    }
  }, [data, questionsIndex])

  const	handleClickAns = (e) => {
    const ques = data.results[questionsIndex]
    if (e.target.textContent === ques.correct_answer) {
      dispatch(plus_score(score + 1))
      console.log(score)

    }

    if(questionsIndex + 1 < data.results.length) {
      setQuestionsIndex(questionsIndex + 1)
    } else {
      setTimeout(() => {
        navigate('/score')
      }, 1500);
    }
  }

  if (isLoading) {
    <>Loading...</>
  }

  if (error) {
    <>{error}</>
  }

  return (
    <VStack w={'full'} textAlign={'center'}>
      <Text fontSize={20} color={'red.800'} fontWeight={'bold'}>Câu hỏi {questionsIndex + 1}</Text>
      <Text as='h4'>{data?.results[questionsIndex].question}</Text>
      <VStack spacing={5} divider={<StackDivider borderColor='tomato' />} >
        {
          options.map((ans, index) => {
            return <Center on
            onClick={handleClickAns} key={index} p={'3'} borderRadius={'5'} bg={'tomato'} w={'full'} h={'auto'} color={'white'} _hover={{cursor: 'pointer'}}>{ans}</Center>
          })
        }
      </VStack>
      <Tag size='lg' colorScheme='red' borderRadius='full' mt={'20px'}>
        <Avatar
          src='https://react-query.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg'
          size='xs'
          name='Segun Adebayo'
          ml={-1}
          mr={2}
        />
        <TagLabel>Điểm: {score} / {data?.results.length}</TagLabel>
      </Tag>

    </VStack>
  )
}

export default Questions