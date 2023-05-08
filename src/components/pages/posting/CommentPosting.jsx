import Avatar from '@/components/avatar/Avatar'
import React from 'react'

const CommentPosting = ({comment}) => {
  return (
    <div className='h-80 overflow-auto mt-5 border-b-2'>
        {
            comment && comment.map((val,idx)=>{
                return(
                    <div>
                        <div className='px-3 mt-3 grid grid-cols-8 gap-2'>
                            <Avatar images={val.avatar_comment}/>
                            <div className='col-span-7'>
                                <div>
                                    <p className='font-bold'>{val.user_name_comment} <spam className='font-light'>{val.comment}</spam> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CommentPosting