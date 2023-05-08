import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { usePostingContext } from '@/components/provider/CreatePostinProvider';

const Tabs = ({path}) => {
    const router = useRouter()




return (
    <div className=' flex gap-7 mb-4'>
        <div className={`w-24 border-black cursor-pointer ${path === 'post' && 'border-t'}`} onClick={()=>router.push('/profile/post')}>
            <h5 className='text-center'>Post</h5>
        </div>
        <div className={`w-24 border-black cursor-pointer ${path === 'like' && 'border-t'}`} onClick={()=>router.push('/profile/like')}>
            <h5 className='text-center'>Like</h5>
        </div>
    </div>
)
}

export default Tabs