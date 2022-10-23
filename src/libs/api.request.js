import HttpRequest from '@/libs/axios'
import config from '@/config'
const baseUrl = config.baseUrl[import.meta.env.MODE]
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.prod

const axios = new HttpRequest(baseUrl)
export default axios
