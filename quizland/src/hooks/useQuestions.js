import { useQuery } from 'react-query'
import axios from 'axios'


const fetchQuestions = async (url) => {
    const res = await axios.get(url)
    const data = await res.data
    return data
}

export const useQuestions = url => {
    return useQuery('questions', () => fetchQuestions(url),
    {
        refetchOnWindowFocus: false
    })
}

