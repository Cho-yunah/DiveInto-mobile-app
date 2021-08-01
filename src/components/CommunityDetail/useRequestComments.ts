import { useRecoilValue, useSetRecoilState } from 'recoil';
import instance from '@/src/lib/api/axios';
import { useEffect } from 'react';
import { commentListType, commentState } from '@/src/recoil/CommunityStack';

export const useRequestComments =({id}) => {
  const setComment = useSetRecoilState<commentListType[]>(commentState)
  const commentList = useRecoilValue(commentState)
 
  useEffect(()=> {
    const requestComments= async() => {
      try{
        const commentResource = await instance.get(`/community/comment/post/${id}?page=0&size=5`)
         commentResource.data._embedded
        ? setComment(commentResource.data._embedded.commentsModelList)
        : setComment([])
      }
      catch(e) {
        console.log(e)
      }
    }
    requestComments()
  },[])
}