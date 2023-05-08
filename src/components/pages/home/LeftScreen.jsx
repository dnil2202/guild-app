import { apiAllUser } from '@/pages/api/services/auth/apigateway'
import { baseUrl } from '@/pages/api/services/posting/apiigateway'
import React, { Fragment, useEffect, useState } from 'react'

const LeftScreen = () => {

  const [dataAllUser, setDataAllUser]=useState([])

  const getDataUser = async () =>{
    try {
      let res = await apiAllUser()
      if(res){
        setDataAllUser(res.data)
      }
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    getDataUser()
  },[])

   const printAllUser = () =>{
    return dataAllUser.map((user,idx)=>{
      if(user.images){
        return(
          <div key={user.idusers} className='flex gap-4 py-3'>
            <img
            src={baseUrl+user.images}
            className='w-10 rounded-full border'
            alt='load'
            />
            <p className='mt-2 text-slate-400'>{user.username}</p>
  
          </div>
        )

      }
    })
   }
  return (
    <Fragment>
        <div className='bg-white w-4/5 px-3 rounded-lg h-fit mt-4'>
            <div className='mx-auto py-3'>
            <input className='border border-slate-300 w-full h-10 pl-3 rounded-lg bg-slate-100' placeholder='search'/>
            </div>
            <div >
              <h6 className='text-slate-400'>Some user</h6>
            </div>
            {printAllUser()}
        </div>
    </Fragment>
  )
}

export default LeftScreen