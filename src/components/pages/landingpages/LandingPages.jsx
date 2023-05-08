import React, { Fragment } from 'react'
import img from '../../../../public/asset/picture/hannah-busing-Zyx1bK9mqmA-unsplash.jpg'
import logo from '../../../../public/asset/picture/_-removebg-preview(1).png'
import Image from 'next/image'
import FormLogin from '@/components/form/FormLogin'

const LandingPages = () => {
  return (
    <Fragment>
        <div>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    <Image 
                    src={img}
                    alt='guild-pict'
                    className='h-screen bg-cover'
                    />
                </div>
                <div className='bg-slate-100'>
                    <div className=''>
                        <div className=' bg-white w-full h-36'>
                            <div className='flex justify-center -mt-[70px]'>
                                <Image src={logo}
                                width={200}
                                height={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-28'>
                        <FormLogin/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default LandingPages