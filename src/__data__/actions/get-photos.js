import axios from 'axios'

export default async (albumId) => {
    const result = await axios('https://jsonplaceholder.typicode.com/photos', {
        method: 'GET',
        params:{
            albumId : albumId
        }
    })
    return result.data
}