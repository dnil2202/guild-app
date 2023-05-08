import Avatar from '@/components/avatar/Avatar'
import { usePostingContext } from '@/components/provider/CreatePostinProvider'
import { useUserContext } from '@/components/provider/CreateUserProvider'
import { baseUrl } from '@/pages/api/services/posting/apiigateway'
import React from 'react'
import CommentPosting from './CommentPosting'
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHeart } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { useRouter } from 'next/router'


const PostingDetail = () => {
    //posting context
  const {handleFunction, state}=usePostingContext()
  const {dataPostingDetail,comment,setComment}=state
  const {submitComment, submitLike, deleteLike }=handleFunction
  
  //userContext
  const {userState}=useUserContext()
  const {dataUser}=userState

  const userLikeOrNo= dataPostingDetail.likes && dataPostingDetail.likes.find((v,i)=>v.idusers === dataUser.idusers)
  const router=useRouter()
  const idPosting = router.asPath.split('/')[2]

  return (
    <div className=' flex justify-center py-5'>
        <div className='w-[1000px] h-[600px] bg-white shadow-md'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='w-full h-[600px] shadow-lg'>
                        <img
                        src={`${baseUrl}/${dataPostingDetail.images}`}
                        className='w-full h-[600px] rounded-l-lg'
                        alt={`posting${dataPostingDetail.idPosting}`}
                        /> 
                    </div>
                </div>
                <div className='relative mt-5'>
                    <div className='border-b-2'>
                        <div className='px-3 mb-2 flex gap-2'>
                            <Avatar images={dataUser.images}/>
                            <p className='font-bold mt-1'>{dataUser.username}</p>
                        </div>
                    </div>
                    <div className='px-3 mt-3 grid grid-cols-8 gap-2'>
                        <Avatar images={dataUser.images}/>
                        <div className='col-span-7'>
                            <div>
                                <p className='font-bold'>{dataUser.username} <spam className='font-light'>{dataPostingDetail.caption}</spam> </p>
                            </div>
                        </div>
                    </div>
                    <CommentPosting comment={dataPostingDetail.comment}/>
                    <div className='px-3 flex gap-2 my-3'>
                        {
                            userLikeOrNo ?
                            <AiFillHeart 
                            size={25}
                            onClick={()=>deleteLike({idLike:userLikeOrNo.id, idPosting:idPosting})}
                            />
                            :
                            <AiOutlineHeart size={25}
                            onClick={()=>submitLike({idLike:idPosting, id:dataUser.idusers, refresh:true})}
                            />
                        }
                        <FaRegCommentDots size={25}/>
                        <AiOutlineShareAlt size={25}/>
                    </div>
                    <div className='px-3'>
                        <p className='font-bold text-xs'>{dataPostingDetail.likes && dataPostingDetail.likes.length}Likes</p>
                    </div>
                    <div className='absolute bottom-3 border-t-2 ml-2'>
                        <div className='flex gap-2'>
                            <input 
                            value={comment}
                            className='w-72 h-8 focus:outline-none' 
                            placeholder='comment' 
                            onChange={(e)=>setComment(e.target.value)}/>
                            <div className='mt-1'>
                                <button 
                                className={`text-sky-400  -ml-2 ${comment.length>0 && 'font-bold'}`} 
                                onClick={()=>submitComment({id:dataUser.idusers, idposting:idPosting})}
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default PostingDetail