import { LoginApi, keepLogin } from '@/pages/api/services/auth/apigateway'
import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

export const UserContext = createContext()

export default function UserWrapper({children}){
    const [dataUser,setDataUser]=useState([])
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const router = useRouter()

    const onLogin = async () =>{
        try {
            let res = await LoginApi({email, password})
            if(res.data.idusers){
                setDataUser(res.data)
                router.push('/home')
                localStorage.setItem('guild',res.data.token)
            }
        } catch (error) {
            console.log(error)
        }
    }



    const onKeepLogin = async ()=>{
        let token = localStorage.getItem('guild')
        try {
            let res = await keepLogin({token})
            if(res.data.idusers){
                localStorage.setItem('guild',res.data.token)
                setDataUser(res.data)
            }else{
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onLogout = ()=>{
        router.push('/')
        setDataUser([])
        localStorage.removeItem('guild')
    }

        const userHandleFunction = {
        onLogin,
        onKeepLogin,
        onLogout
    }

    const userState = {
        dataUser,setDataUser,
        email,setEmail,
        password,setPassword
    }

    return(
        <UserContext.Provider value={{userState,userHandleFunction}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext (){
    return useContext(UserContext)
}

