import { addLikeApi, allPostingApi, deleteLikeApi, getPostingUserApi, postCommentApi, submitPostingApi } from "@/pages/api/services/posting/apiigateway";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

export const PostingContext = createContext()

export default function PostingWrapper({children}){
    const router = useRouter()

    const [dataPosting,setDataPosting]=useState([])
    const [page,setPage]=useState(1)
    const [img,setImg]=useState(null)
    const [caption,setCaption]=useState('')
    const [openModal, setOpenModal]=useState(false)
    const [fetchStatus,setFetchStatus]=useState(true)


    //Posting Detail
    const [dataPostingDetail, setDataPostingDetail]=useState([])
    const [comment,setComment]=useState('')
    
    const getDataPosting = async () =>{
        try {
            let res = await allPostingApi({page})
            if(res.data.length >=5 ){
                setDataPosting([...dataPosting,...res.data])
            }else{
                setPage(1)
            }
        } catch (error) {
            console.log(error)
        }
    };

    const submitPosting = async (id) =>{
        let formData = new FormData();
    formData.append('data',JSON.stringify({
        caption,
        users_id:id
    }))
    formData.append('images',img)
    try {
        let res = await submitPostingApi({formData})
        if(res.data.success){
            toast.success('Success', {
                theme: "colored",
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            })
            setImg(null)
            setCaption('')
            setOpenModal(false)
            setDataPosting([])
            setPage(1)
            setFetchStatus(true)
        }
    } catch (error) {
        console.log(error)
        toast.success('Error', {
            theme: "colored",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        })
    }}

    const submitComment = async ({id,idposting})=>{
        try {
            let res = await postCommentApi({idposting,comment,id})
            if(res.data.success){
                toast.success('Success', {
                    theme: "colored",
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                })
                setComment('')
                router.push(`/posting/${idposting}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const submitLike = async({idLike,id, refresh})=>{
        try {
            let res = await addLikeApi({idLike,id})
            if(res.data.success){
                if(refresh){
                    router.push(`/posting/${idLike}`)
                }else{
                    setDataPosting([])
                    setFetchStatus(true)
                    setPage(1)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteLike = async ({idLike,idPosting}) =>{
        try {
            let res =await deleteLikeApi({idLike})
            if(res.data.success){
                if(idPosting){
                    router.push(`/posting/${idPosting}`)
                }else{
                    setDataPosting([])
                    setFetchStatus(true)
                    setPage(1)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const pressEnterSubmitComment = async (event)=>{
        if(event.key==='Enter'){
            let idposting = event.target.id
            let id = comment.split('-')[0]
            console.log(comment)
            let finalComment = comment.split('-')[1]
            try {
                let res = await postCommentApi({idposting:idposting,comment:finalComment,id:id})
                if(res.data.success){
                    toast.success('Success', {
                        theme: "colored",
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    })
                    setComment('')
                    setPage(0)
                    setDataPosting([])
                    setFetchStatus(true)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const onOpenModal=()=>{
        setOpenModal(!openModal)
    };

    const handleFunction  ={
        getDataPosting,
        submitPosting,
        onOpenModal,
        submitComment,
        submitLike,
        deleteLike,
        pressEnterSubmitComment,
    };

    const state ={
        dataPosting,setDataPosting,
        page,setPage,
        img,setImg,
        caption,setCaption,
        openModal,setOpenModal,
        fetchStatus,setFetchStatus,
        dataPostingDetail,setDataPostingDetail,
        comment,setComment,
    };

    return (
        <PostingContext.Provider value={{state, handleFunction}}>
            {children}
        </PostingContext.Provider>
    )
}

export function usePostingContext(){
    return useContext(PostingContext)
}
