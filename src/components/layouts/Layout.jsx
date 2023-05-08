'use client'
import React, { Fragment, useEffect } from 'react'
import { usePathname} from 'next/navigation'
import Navbar from '../navbar/Navbar'
import { useUserContext } from '../provider/CreateUserProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { usePostingContext } from '../provider/CreatePostinProvider'


const Layout = ({children}) => {

  const { userHandleFunction, userState}= useUserContext()
  const {onKeepLogin}=userHandleFunction
  const {dataUser}=userState

  const {handleFunction, state}=usePostingContext()
  const {dataPostingDetail}=state

  const router = useRouter()
  const getPath = router.pathname

  useEffect(()=>{
    onKeepLogin()
  },[])



  const path = usePathname()
  return (
      <Fragment>
          {
            path === '/' ?
            <>
            <Head>
            <title>Guild App</title>
            </Head>
            {children}
            </>
            :
            <>
            <Head>
              {
                getPath === '/posting/[idposting]' ?
                <title>posting from {dataPostingDetail.user_name_post}||Guild</title>
                :
              <title>Guild App</title>
              }
            </Head>

            <Navbar dataUser={dataUser} />
            <div className=' mx-auto px-10 bg-slate-50'>
              {children}
            </div>
            <ToastContainer/>
            </>
          }
    </Fragment>
  )
}

export default Layout