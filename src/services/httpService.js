import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'

axios.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (err) => {
    console.log(err)
    return Promise.reject()
  },
)

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}

export default http
