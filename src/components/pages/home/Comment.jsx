import React, { Fragment } from 'react'
import { baseUrl } from '@/pages/api/services/posting/apiigateway'
import moment from 'moment/moment'

const Comment = ({dataComment}) => {
    const printCommnet = () => {
        return dataComment && dataComment.map((com,idx)=>{
            if(idx === 0){
                return(
                    <Fragment>
                        <div className=' flex gap-4'>
                            <img
                            src={baseUrl + com.images}
                            className='w-10 rounded-full'
                            />
                            <div>
                                <div className='flex gap-2'>
                                    <p className='font-bold'>{com.user_name_comment}</p>
                                    <p className='text-xs mt-1 text-slate-400'>{(moment(com.created_date).startOf('hour').fromNow())}</p>
                                </div>
                                <div className='w-full'>
                                    <p>{com.comment}</p>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        })
    }
  return (
    <Fragment>
        <div className='my-10'>
            {printCommnet()}
        </div>
    </Fragment>
)
}

export default Comment