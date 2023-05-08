import React, { useState } from 'react'
import { usePostingContext } from '../provider/CreatePostinProvider'
import { useUserContext } from '../provider/CreateUserProvider'
import { baseUrl } from '@/pages/api/services/posting/apiigateway'
import { BsArrowLeft } from 'react-icons/bs';
import Avatar from '../avatar/Avatar';


const FormInputPosting = () => {
    const {state,handleFunction}=usePostingContext()
    const  {img, setImg, caption, setCaption}=state
    const {submitPosting}=handleFunction
    const {userState}= useUserContext()
    const{dataUser}=userState

  return (
        <div >
            <div className={`flex ${img ? 'justify-between':'justify-center'} border-b-2 py-3 px-5`}>
                {
                    img && 
                    <>
                    <BsArrowLeft 
                    size={20}
                    onClick={()=>{
                        setImg(null);
                        setCaption('')
                    }}
                    />
                    
                    </>
                }
                <p className='font-bold'>Create new post</p>
                <p 
                className={`text-sky-500 font-semibold ${img && caption.length > 0 ?'visible':'invisible'} cursor-pointer`}
                onClick={()=>submitPosting(dataUser.idusers)}
                >
                    Share
                </p>
            </div>
            <div> 
                {
                    !img ?
                    <div className='flex justify-center py-48 '>
                        <input 
                        type="file" 
                        className="file-input file-input-bordered file-input-info w-full max-w-xs" 
                        onChange={(e)=>setImg(e.target.files[0])}
                        />
                    </div>
                    :
                    <div className='w-full flex gap-3'>
                    <img
                    src={URL.createObjectURL(img)}
                    className='object-fill w-3/5 h-[455px] rounded-bl-2xl'
                    />
                    <div className='my-3 w-2/5 pr-3 '>
                        <div className='flex gap-2 mb-3'>
                            <Avatar/>
                            <p className='pt-2 font-bold'>{dataUser.username}</p>
                        </div>
                        <textarea 
                        className='w-full h-28 focus:outline-none' 
                        placeholder='write captions'
                        onChange={(e)=>setCaption(e.target.value)}
                        />
                        <div className='border-t-2'>
                            <p className='text-end font-light'>{`${caption.length}/300`}</p>
                        </div>
                    </div>
                    </div>
                }
            </div>
        </div>
  )
}

export default FormInputPosting