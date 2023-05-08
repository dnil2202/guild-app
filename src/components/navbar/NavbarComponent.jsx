import React, { Fragment, useState } from 'react'
import MenuNavbar from './MenuNavbar'
import { AiOutlinePoweroff} from 'react-icons/ai';
import { useUserContext } from '../provider/CreateUserProvider';


const NavbarComponent = ({dataUser}) => {
    const baseUrl = 'http://localhost:4000'

    const [openMenu, setOpenMenu]= useState(false)
    const {userHandleFunction}= useUserContext()
    const {onLogout}=userHandleFunction
    

  return (
    <Fragment>
        <div className='bg-white shadow-lg w-full h-20'>
            <div className='mx-auto px-10'>
                <div className='grid grid-cols-7 py-4'>
                    <div className='col-span-2'>
                        <h2>GUILD</h2>
                    </div>
                    <div className='col-span-4'>
                        <MenuNavbar/>
                    </div>
                    <div 
                    className='flex gap-2'
                    onClick={()=>setOpenMenu(!openMenu)}
                    >
                        <img
                        src={baseUrl+dataUser.images}
                        alt='avtarguild'
                        className='w-10 rounded-full'
                        />
                        <div>
                        <h6>{dataUser.username}</h6>
                        <AiOutlinePoweroff 
                        className='fill-red-500'
                        onClick={onLogout}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default NavbarComponent