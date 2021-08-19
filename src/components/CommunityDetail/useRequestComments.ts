import { commentIdState } from './../../recoil/CommunityStack';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import instance from '@lib/api/axios';
import { commentListPageState, commentLoadingState, commentRequestState, commentState, recommentRequestState } from '@recoil/CommunityStack';
import { commentListType } from './types';

export const useRequestComments =({id}: {id: number}) => {
  const commentId = useRecoilValue(commentIdState)
  const [commentList, setCommentList]= useRecoilState(commentState)
  const [commentLoading, setCommentLoading] = useRecoilState(commentLoadingState)
  const [RequestSuccess, setRequestSuccess] = useRecoilState(commentRequestState)
  const [ commentListPage , setCommentListPage ] = useRecoilState(commentListPageState)
  const [recommentSuccess, setRecommentSuccess] = useRecoilState(recommentRequestState)
 
  useEffect(()=> {
    const requestComments= async() => {
      setCommentLoading(true)
      try{
        const commentResource = await instance.get(`/community/comment/post/${id}?page=${commentListPage}&size=6`)
         commentResource.data._embedded
         ? setCommentList(commentResource.data._embedded.commentsModelList)
         : setCommentList([])
         setRequestSuccess(false)
         setRecommentSuccess(false)
        }
      catch(e) {
        console.log(e)
      }
      setCommentLoading(false)
    }
    requestComments()
  },[ id, RequestSuccess, recommentSuccess])
  return commentList;
}