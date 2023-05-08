import { baseUrl } from '@/pages/api/services/posting/apiigateway'
import React, { Fragment } from 'react'
import { useUserContext } from '../provider/CreateUserProvider'

const Avatar = ({images}) => {
    const {userState}= useUserContext()
    const {dataUser}=userState

  return (
    <Fragment>
        <img
            src={baseUrl+images}
            alt='avtarguild'
            className='w-8 rounded-full'
        />
    </Fragment>
  )
}

export default Avatar