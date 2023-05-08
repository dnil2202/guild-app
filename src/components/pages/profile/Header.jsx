import { useUserContext } from '@/components/provider/CreateUserProvider'
import { baseUrl } from '@/pages/api/services/posting/apiigateway'
import React from 'react'

const HeaderProfile = () => {

    const { userHandleFunction, userState}= useUserContext()
    const{dataUser}=userState

  return (
    <div className='mx-auto px-52 pb-3 border-b-2'>
      <div className='flex  gap-24'>
          <div>
              <img src={dataUser.images?baseUrl + dataUser.images:'https://cdn-icons-png.flaticon.com/512/149/149071.png'} className='h-[150px] w-[150px] rounded-full'/>
          </div>
          <div className='h-10 mt-5'>
              <p className='text-[32px] font-extralight text-gray-600 mb-5'>{dataUser.username}</p>
              <p className='text-[16px]'>{dataUser.email}</p>
              <p className='text-[16px]'>{dataUser.fullname}</p>
              <p className='text-[16px]'>{dataUser.bio}</p>
          </div>
  </div>

    </div>
  )
}

export default HeaderProfile