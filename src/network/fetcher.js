import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

function fetcher({ config, data }) {
  return axios({ ...config, data })
}

export { fetcher }
