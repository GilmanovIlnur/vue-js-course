import axios from 'axios'

export default async (userId) => {
    const result = await axios('https://jsonplaceholder.typicode.com/albums', {
        method: 'GET',
        params:{
            userId : userId
        }
    })
    return result.data
}