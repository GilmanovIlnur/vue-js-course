import axios from 'axios'

export default async () => {
 const result = await axios('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })

    return result.data
}