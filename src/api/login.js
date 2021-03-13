import axios from '@/utils/request'

const getCode = (sid) => {
  // axios.request({
  //  method: 'get',
  //  url: '/getCaptcha'
  // })
  return axios.get('/public/getCaptcha', {
    params: {
      sid
    }
  })
}

const forget = (option) => {
  return axios.post('/login/forget', {
    ...option
  })
}

const login = (loginInfo) => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

const reg = (regInfo) => {
  return axios.post('/login/reg', {
    ...regInfo
  })
}

export { getCode, forget, login, reg }
