import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import instance, { getInstanceATK } from "@lib/api/axios"
import { commentListPageState, 
         recommentLoadingState, 
         recommentState, 
         recommentRequestState } 
  from "@recoil/CommunityStack"
import { CommentIdProps } from './types';

export const useRequestRecomments= ({commentId}: CommentIdProps) => {
  const [recommentList, setRecommentList] = useRecoilState(recommentState(commentId))
  const setRecommentLoading = useSetRecoilState(recommentLoadingState)
  const recommentListPage = useRecoilValue(commentListPageState)
  const [recommentSuccess, setRecommentSuccess] = useRecoilState(recommentRequestState)

  useEffect(()=> {
    const requestRecomments= async() => {
      setRecommentLoading(true)
      const instanceAtk = await getInstanceATK();
      try{
        const recommentResource = await instance.get(`/community/comment/${commentId}/comment?page=${recommentListPage}&size=3`)
        // console.log(recommentResource)
        recommentResource.data._embedded
         ? setRecommentList(recommentResource.data._embedded.commentCommentsModelList)
         : setRecommentList([])
         setRecommentSuccess(false)
        }
      catch(e) {
        console.log(e)
      }
      setRecommentLoading(false)
    }
    requestRecomments()
  },[ recommentSuccess ])
  return recommentList;
}