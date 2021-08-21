import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import instance from '@lib/api/axios';
import { commentListPageState, commentLoadingState, commentRequestState, commentState } from '@recoil/CommunityStack';
import { CommentListType } from './types';

export const useRequestComments =({id}: {id: number}) => {
  const [commentList, setCommentList]= useRecoilState(commentState)
  const [commentLoading, setCommentLoading] = useRecoilState(commentLoadingState)
  const [commentSuccess, setCommentSuccess] = useRecoilState(commentRequestState)
  const [ commentListPage , setCommentListPage ] = useRecoilState(commentListPageState)
 
  useEffect(()=> {
    const requestComments= async() => {
      setCommentLoading(true)
      try{
        const commentResource = await instance.get(`/community/comment/post/${id}?page=${commentListPage}&size=6`)
         commentResource.data._embedded
         ? setCommentList(commentResource.data._embedded.commentsModelList)
         : setCommentList([])
         setCommentSuccess(false)
        }
      catch(e) {
        console.log(e)
      }
      setCommentLoading(false)
    }
    requestComments()
  },[ id, commentSuccess])
  return commentList;
}