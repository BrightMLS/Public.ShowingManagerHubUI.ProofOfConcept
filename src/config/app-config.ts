import axios from 'axios'
import { getIdToken } from 'utils'

axios.defaults.headers.common['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  async function (config) {
    config.headers = {
      ...config.headers,
      ...(config?.headers?.authRequired
        ? { Authorization: `Bearer ${await getIdToken()}` }
        : null),
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)
const apiEndpoint = `${process.env.REACT_APP_API_ENDPOINT}`
const webhookApiEndpoint = `${process.env.REACT_APP_WEBHOOK_API_ENDPOINT}`

const appConfig = {
  useMockDataInShowingManagerPoc:
    false && process.env.NODE_ENV === 'development',
  apiEndpoint: apiEndpoint,
  webhookApiEndpoint: webhookApiEndpoint,
}
export default appConfig
