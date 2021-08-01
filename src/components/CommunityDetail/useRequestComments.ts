import { useRecoilState, useRecoilValue } from 'recoil';
import instance from '@/src/lib/api/axios';
import { useEffect } from 'react';
import { commentListType, commentRequestState, commentState } from '@/src/recoil/CommunityStack';

export const useRequestComments =({id}) => {
  const [commentList, setCommentList]= useRecoilState<commentListType[]>(commentState)
  const [RequestSuccess, setRequestSuccess] = useRecoilState(commentRequestState)
 
  useEffect(()=> {
    const requestComments= async() => {
      try{
        console.log('hh')
        const commentResource = await instance.get(`/community/comment/post/${id}?page=0&size=5`)
         commentResource.data._embedded
         ? setCommentList(commentResource.data._embedded.commentsModelList)
         : setCommentList([])
         setRequestSuccess(false)
        }
      catch(e) {
        console.log(e)
      }
    }
    requestComments()
  },[ id, RequestSuccess])
  return commentList;
}