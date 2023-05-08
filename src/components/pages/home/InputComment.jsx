import { usePostingContext } from '@/components/provider/CreatePostinProvider'
import { useUserContext } from '@/components/provider/CreateUserProvider'
import { baseUrl } from '@/pages/api/services/posting/apiigateway'
import React, { Fragment } from 'react'

const InputComment = ({images, id}) => {

  const {handleFunction, state}=usePostingContext()
  const {UserHandleFunction, userState}=useUserContext()
  const {dataUser}=userState
  const {comment, setComment} = state
  const {pressEnterSubmitComment}= handleFunction

  return (
    <Fragment>
        <div className='flex gap-4 my-3'>
            <img
            src={baseUrl+images}
            className='w-10 rounded-full'
            />
            <input
            className='w-full border border-slate-200 h-10 rounded-md bg-slate-50 placeholder:text-xs' 
            placeholder='Write your comment'
            onChange={(e)=>setComment(`${dataUser.idusers}-${e.target.value}`)}
            onKeyDown={pressEnterSubmitComment}
            id={id}
            value={comment.split('-')[1]}
            />
        </div>
    </Fragment>
  )
}

export default InputComment