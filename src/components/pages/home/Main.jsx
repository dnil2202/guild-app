import { usePostingContext } from '@/components/provider/CreatePostinProvider'
import React, { Fragment, useEffect } from 'react';
import { RxBorderDotted } from 'react-icons/rx';
import InfiniteScroll from "react-infinite-scroll-component";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { TbMessageDots } from 'react-icons/tb';
import { RiUserSharedLine } from 'react-icons/ri';
import { useUserContext } from '@/components/provider/CreateUserProvider';
import InputComment from './InputComment';
import Comment from './Comment';
import AcceptButton from '@/components/buttons/AcceptButton';
import { useRouter } from 'next/navigation';
import LoadingComponent from '@/components/loading/LoadingComponent';


const Main = () => {
  const router = useRouter()

  const baseUrl = 'http://localhost:4000'
  const {handleFunction, state}=usePostingContext()
  const {userHandleFunction, userState}=useUserContext()

  const {dataUser}=userState
  const { getDataPosting, deleteLike, submitLike} = handleFunction
  const {dataPosting, page, setPage, fetchStatus, setFetchStatus}=state

  useEffect(()=>{
    setTimeout(()=>{
      getDataPosting()
      setFetchStatus(false)
    },1000)
  },[page])


  const fetchMorePost = () =>{
    setPage(page+1)
  };


  const printDataPosting = ()=>{
    return dataPosting.map((posting,index)=>{
      let userLIkeorNo =posting.likes.find((v,i)=>v.idusers===dataUser.idusers)
      return(
        <div className='flex justify-center' key={posting.idposting}>
            <div key={posting.idposting} className='bg-white w-full h-fit my-3 rounded-lg'>
              <div className='mx-auto px-6 py-2'>
                <div className='h-16 w-full flex justify-between'>
                  <div className='flex gap-2'>
                    <img
                    src={`${baseUrl}/${posting.avatar}`}
                    alt='guild_avatar'
                    className='rounded-xl w-14 h-14'
                    />
                    <h6 className='font-semibold'>{posting.user_name_post}</h6>
                  </div>
                  <RxBorderDotted size={20}/>
                </div>
                <div className='w-full h-full border border-slate-200 mt-4'>
                  <img
                  src={`${baseUrl}/${posting.images}`}
                  alt='Loading'
                  className='w-full h-96 object-cover'
                  />
                </div>
                <div className='py-5 border-b-2'>
                  <p>{posting.caption}</p>
                </div>
                <div className='flex gap-4 my-5'>
                  {
                    posting.likes &&
                    <>
                    <div className='flex gap-2'>
                    {
                      userLIkeorNo  ?
                      <>
                        <AiFillHeart
                        onClick={(()=>deleteLike({idLike:userLIkeorNo.id}))}
                        />
                        <p>{posting.likes.length}</p>
                      </>
                      :
                      <>
                      <AiOutlineHeart
                      onClick={()=>submitLike({idLike:posting.idposting,id:dataUser.idusers, refresh:false})}
                      />
                      <p>{posting.likes.length}</p>
                      </>
                    }
                    </div>
                    </>
                  }
                    <div className='flex gap-2'>
                        <TbMessageDots/>
                  {
                    <p>{posting.comment ? posting.comment.length : 0} Comments</p>
                  }
                  </div>
                  <div className='flex gap-2'>
                    <RiUserSharedLine/>
                    <p>Share</p>
                  </div>
                </div>
                  <InputComment  images={dataUser.images} id={posting.idposting}/>
                  <Comment dataComment={posting.comment}/>
                  <div className='mt-12'>
                    <AcceptButton 
                    tittle={'See more'}
                    handleClick={()=>router.push(`/posting/${posting.idposting}`)}
                    />
                  </div>
              </div>
            </div>
        </div>
      )
    })
  }

  return (
    <Fragment>
      <div>
        <InfiniteScroll
        dataLength={dataPosting.length}
        next={fetchMorePost}
        hasMore={true}
        loader={<LoadingComponent/>}
        >
          {printDataPosting()}
        </InfiniteScroll>
      </div>
    </Fragment>
  )
}

export default Main