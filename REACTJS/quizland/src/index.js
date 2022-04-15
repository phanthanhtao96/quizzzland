import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { store } from './app/store'
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css'


const client = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
