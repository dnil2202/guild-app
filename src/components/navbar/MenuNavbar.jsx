import React, { Fragment } from 'react'
import { SiHomeassistant } from 'react-icons/si';
import { BsPersonVideo3 } from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';
import { useRouter } from 'next/navigation';


const MenuNavbar = () => {

    const router = useRouter()
    
  return (
    <Fragment>
        <div className='flex gap-3'>
            <div className='hover:bg-slate-100 w-28 h-10 rounded-full text-white hover:text-sky-700'>
                <div 
                className='flex mx-auto px-3 py-1 cursor-pointer '
                onClick={()=>router.push('/home')}
                >
                    <SiHomeassistant
                    className='fill-sky-600'
                    size={25}
                    />
                    <h6>Home</h6>
                </div>
            </div>
            <div className='hover:bg-slate-100 w-28 h-10 rounded-full text-white hover:text-sky-700'>
                <div className='flex mx-auto px-3 py-1 cursor-pointer '
                onClick={()=>router.push('/profile/post')}
                >
                    <BsPersonVideo3
                    className='fill-sky-600'
                    size={25}
                    />
                    <h6>Profile</h6>
                </div>
            </div>
            <div className='hover:bg-slate-100 w-28 h-10 rounded-full text-white hover:text-sky-700'>
                <div className='flex mx-auto px-3 py-1 cursor-pointer '>
                    <SlSettings
                    className='fill-sky-600'
                    size={25}
                    />
                    <h6>Setting</h6>
                </div>
            </div>
        <input className='border border-slate-300 w-52 pl-3' placeholder='search'/>
        </div>
    </Fragment>
  )
}

export default MenuNavbar