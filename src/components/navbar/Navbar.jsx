import { usePathname, useRouter } from 'next/navigation'
import React, { Fragment, useEffect, useState } from 'react'
import NavbarComponent from './NavbarComponent'
import { useUserContext } from '../provider/CreateUserProvider'

const Navbar = () => {
  const path = usePathname()
  const router = useRouter()
  const {userState}= useUserContext()
  const{dataUser}=userState
    

  return (
    <Fragment>
        <div className={`${path === '/' && 'hidden'}`}>
            <NavbarComponent dataUser={dataUser}/>
        </div>
    </Fragment>
  )
}

export default Navbar