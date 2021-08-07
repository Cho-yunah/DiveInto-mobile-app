import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import instance from '@/src/lib/api/axios';
import { commentListPageState, commentListType, commentLoadingState, commentRequestState, commentState } from '@/src/recoil/CommunityStack';

export const useRequestComments =({id}) => {
  const [commentList, setCommentList]= useRecoilState<commentListType[]>(commentState)
  const [commentLoading, setCommentLoading] = useRecoilState(commentLoadingState)
  const [RequestSuccess, setRequestSuccess] = useRecoilState(commentRequestState)
  const [ commentListPage , setCommentListPage ] = useRecoilState(commentListPageState)
 
  useEffect(()=> {
    const requestComments= async() => {
      setCommentLoading(true)
      try{
        const commentResource = await instance.get(`/community/comment/post/${id}?page=${commentListPage}&size=6`)
         commentResource.data._embedded
         ? setCommentList(commentResource.data._embedded.commentsModelList)
         : setCommentList([])
         setRequestSuccess(false)
        }
      catch(e) {
        console.log(e)
      }
      setCommentLoading(false)
    }
    requestComments()
  },[ id, RequestSuccess])
  return commentList;
}