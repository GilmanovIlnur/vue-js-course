import axios from 'axios'

export default async (userId) => {
    const result = await axios('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        params:{
            userID : userId
        }
    })

    return result.data
}