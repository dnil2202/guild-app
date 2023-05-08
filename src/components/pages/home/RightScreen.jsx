import AcceptButton from '@/components/buttons/AcceptButton'
import { usePostingContext } from '@/components/provider/CreatePostinProvider'
import { useUserContext } from '@/components/provider/CreateUserProvider'
import { baseUrl } from '@/pages/api/services/posting/apiigateway'
import React, { Fragment } from 'react'

const RightScreen = () => {
  const {userState}=useUserContext()
  const {state,handleFunction}=usePostingContext()
  const {dataUser}=userState
  const {openModal,setOpenModal}=state

  return (
    <Fragment>
        <div className='bg-white w-4/5 h-64 rounded-lg '>
          <div className='flex justify-center pt-4'>
            <img
            src={baseUrl+dataUser.images}
            className='w-12'
            />
          </div>
          <h5 className='text-center '>{dataUser.fullname}</h5>
          <p className='text-center text-slate-400'>@{dataUser.username}</p>
          <div className='flex justify-around my-5'>
            <div>
              <h3>20</h3>
              <p className='text-slate-400 '>posts</p>
            </div>
            <div>
              <h3>13</h3>
              <p className='text-slate-400 text-center'>like</p>
            </div>
            <div>
              <h3>10</h3>
              <p className='text-slate-400 text-center'>comment</p>
            </div>
          </div>
          <div className='mx- auto px-3'>
            <AcceptButton
            tittle={'Create post'}
            handleClick={()=>setOpenModal(true)}
            />
          </div>
        </div>
    </Fragment>
  )
}

export default RightScreen