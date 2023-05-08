import React, { Fragment, useEffect, useState } from 'react'
import {getPostingDetailApi } from '../api/services/posting/apiigateway'
import PostingDetail from '@/components/pages/posting/PostingDetail'
import { usePostingContext } from '@/components/provider/CreatePostinProvider'

const Posting = ({detail}) => {
  //posting context
  const {handleFunction, state}=usePostingContext()
  const {setDataPostingDetail}=state


  useEffect(()=>{
    setDataPostingDetail(detail)
  })


  return (
    <Fragment>
      <PostingDetail/>
    </Fragment>
  )
}

export const getServerSideProps = async (context) =>{
  let idposting = context.query.idposting 
  try {
      let res = await getPostingDetailApi({idposting})
      return{
          props:{
              detail:res.data[0]
          }
      }
  } catch (error) {
      console.log(error)
  }
}

export default Posting