import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Questions from './features/questions/Questions';
import Score from './features/score/Score';
import Setup from './features/setup/Setup';

function App() {
  return (
    <Flex h='100vh' bgGradient='linear(to-r, green.200, pink.500)' justifyContent={'center'} alignItems={'center'}>
      <Flex alignItems={'center'}>
        <Routes>
          <Route path='/' element={<Setup />} />
          <Route path='/questions' element={<Questions />}/>
          <Route path='/score' element={<Score />}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </Flex>
    </Flex>
  );
}

export default App;
