import axios from "axios"

const baseUrl = 'http://localhost:4000'

export const LoginApi = ({email, password}) => axios.post(`${baseUrl}/auth/login`,{
    email:email,
    password:password
})

export const keepLogin = ({token})=>axios.get(`${baseUrl}/auth/keep`,{
    headers:{
        'Authorization': `Bearer ${token}`
    }
})

export const apiAllUser = () => axios.get(`${baseUrl}/auth/all`)