import { useUserContext } from '@/components/provider/CreateUserProvider'
import { baseUrl, getPostingUserApi } from '@/pages/api/services/posting/apiigateway'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Posting = ({path}) => {

    const router = useRouter()

    const { userHandleFunction, userState}= useUserContext()
    const {dataUser}=userState

    const [dataPosting, setDataPosting] = useState([])

    const getData = async () =>{
        try {
            let res = await getPostingUserApi(dataUser.idusers)
            if(res){
                setDataPosting(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[path])


  return (
    <div className='grid grid-cols-3 gap-3'>
        {
            dataPosting && dataPosting.map((data,index)=>{
                return(
                    <div 
                    className='w-80 h-64 mb-2 shadow-lg'
                    onClick={()=>router.push(`/posting/${data.idposting}`)}
                    key={data.id}
                    >
                        <img src={baseUrl+data.images} className='w-full h-full'/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Posting