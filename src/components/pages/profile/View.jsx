import React from 'react'
import HeaderProfile from './Header'
import Tabs from './Tabs'
import Posting from './Posting'
import { useRouter } from 'next/router'
import Like from './Like'

const View = () => {
  const router = useRouter()
  const path = router.pathname.split('/')[2]
  
  return (
    <div className='py-5 mx-auto w-4/6'>
        <HeaderProfile/>
        <div className='flex justify-center'>
            <Tabs path={path}/>
        </div>
        <div className='flex justify-center'>
          {
            router.pathname === "/profile/post"?
            <>
            <Posting path={path}/>
            </>
            :
            <>
            <Like path={path}/>
            </>
          }
        </div>
    </div>
  )
}

export default View