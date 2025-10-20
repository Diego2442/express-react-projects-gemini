import axios from 'axios'

const projectApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export { projectApi }