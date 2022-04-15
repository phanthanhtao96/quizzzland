import { useQuery } from 'react-query'
import axios from 'axios'


const fetchSetup = async () => {
    const res = await axios.get('https://opentdb.com/api_category.php')
    const data = await res.data
    return data
}

export const useSetup = () => {
    return useQuery('setup', fetchSetup)
}

