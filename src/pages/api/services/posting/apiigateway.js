import axios from "axios"

export const baseUrl = 'http://localhost:4000'

export const allPostingApi = ({page}) => axios.get(`${baseUrl}/posting?page=${page}&pageSize=${5}`)

export const submitPostingApi = ({formData})=>axios.post(`${baseUrl}/posting`,formData)

export const getPostingDetailApi = ({idposting})=>axios.get(baseUrl+`/posting/${idposting}?page=1&pageSize=${10}`)

export const postCommentApi = ({idposting,comment,id})=>axios.post(baseUrl+`/comment`,{
    comment:comment,
    user_comment_id:id,
    posting_id:idposting
})

export const addLikeApi = ({idLike,id}) => axios.post(baseUrl+'/like',{
    postId:idLike,
    userId:id,
})

export const deleteLikeApi = ({idLike})=>axios.delete(`${baseUrl}/like/${idLike}`)

export const getPostingUserApi = (id) => axios.get(baseUrl+`/posting/profile/${id}`)

export const getLikeUserApi = (id) => axios.get(baseUrl+`/like/${id}`)
