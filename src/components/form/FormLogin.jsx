import React, { Fragment, useContext, useState } from 'react'
import { useUserContext } from '../provider/CreateUserProvider'

const FormLogin = () => {

const{ userHandleFunction, userState }= useUserContext()

const { onLogin } =userHandleFunction

const {email, setEmail , password , setPassword }= userState






  return (
    <Fragment>
        <div className='w-4/5 h-10'>
            <h2 className='leading-10'>SIGN IN</h2>
            <p className='text-slate-300 mb-5'>don't have account ?<span className='text-sky-500 pl-1 cursor-pointer'>sign up</span></p>
            <input 
            className='w-full my-3 border-b-2 border-slate-400 bg-transparent h-10 focus:outline-none'  
            placeholder='Username/email'
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
            className='w-full border-b-2 border-slate-400 bg-transparent h-10 focus:outline-none'  
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <div className='mt-2'>
                <button 
                className='btn btn-accent w-full'
                onClick={onLogin}
                >
                  Sign in
                </button>
            </div>

        </div>
    </Fragment>
  )
}

export default FormLogin