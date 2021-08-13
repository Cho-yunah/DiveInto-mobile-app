import { recommentRequestState } from '@/src/recoil/CommunityStack';
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import instance, { getInstanceATK } from "@/src/lib/api/axios"
import { commentListPageState, recommentListType, recommentLoadingState, recommentState, writingRecommentState } from "@/src/recoil/CommunityStack"

export const useRequestRecomments= ({commentId}) => {
  const [recommentList, setRecommentList] = useRecoilState<recommentListType[]>(recommentState)
  const [recommentLoading, setRecommentLoading] = useRecoilState(recommentLoadingState)
  const [writingRecomment, setWritingRecomment] = useRecoilState(writingRecommentState)
  const [ recommentListPage , setRecommentListPage ] = useRecoilState(commentListPageState)
  const [recommentSuccess, setRecommentSuccess] = useRecoilState(recommentRequestState)
  console.log('hh')

  useEffect(()=> {
    const requestRecomments= async() => {
      setRecommentLoading(true)
      const instanceAtk = await getInstanceATK();
      try{
        const recommentResource = await instance.get(`/community/comment/${commentId}/comment?page=${0}&size=3`)
        console.log(recommentResource)
        recommentResource.data._embedded
         ? setRecommentList(recommentResource.data._embedded.commentCommentsModelList)
         : setRecommentList([])
         setWritingRecomment(false)
         setRecommentSuccess(false)
        }
      catch(e) {
        console.log(e)
      }
      setRecommentLoading(false)
    }
    requestRecomments()
  },[commentId, recommentSuccess ])
  return recommentList;
}