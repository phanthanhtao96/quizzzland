import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';
import './App.css';
import Filters from './components/filters';
import TodoList from './components/todolist';

function App() {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <div>
      <VStack p={4}>
        <IconButton 
          icon={<FaSun />} 
          isRound={true}
          size='lg'
          alignSelf='flex-end'
          onClick={toggleColorMode}
        />
        <Heading 
          mb='8' 
          fontWeight='extrabold'
          size='2xl'
          bgGradient='linear(to-r, #48BB78, #E53E3E, #63B3ED)'
          bgClip='text'
        >
          Todo Application With Redux
        </Heading>
      </VStack>
      <VStack>
        <Filters />
        <TodoList />
      </VStack>
    </div>
      
  );
}

export default App;