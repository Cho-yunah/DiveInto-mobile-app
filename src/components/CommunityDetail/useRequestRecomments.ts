import { useEffect } from "react"
import { useRecoilState } from "recoil"
import instance from "@/src/lib/api/axios"
import { commentListPageState, recommentListType, recommentLoadingState, recommentState, writingRecommentState } from "@/src/recoil/CommunityStack"

export const useRequestRecomments= ({commentId}) => {
  const [recommentList, setRecommentList] = useRecoilState<recommentListType[]>(recommentState)
  const [recommentLoading, setRecommentLoading] = useRecoilState(recommentLoadingState)
  const [writingRecomment, setWritingRecomment] = useRecoilState(writingRecommentState)
  const [ recommentListPage , setRecommentListPage ] = useRecoilState(commentListPageState)

  useEffect(()=> {
    const requestRecomments= async() => {
      setRecommentLoading(true)
      try{
        const recommentResource = await instance.get(`/community/comment/${commentId}/comment?page=${0}&size=3`)
        // console.log(recommentResource.data._embedded)
        recommentResource.data._embedded
         ? setRecommentList(recommentResource.data._embedded.commentCommentsModelList)
         : setRecommentList([])
         setWritingRecomment(false)
        }
      catch(e) {
        console.log(e)
      }
      setRecommentLoading(false)
    }
    requestRecomments()
  },[commentId, writingRecomment ])
  return recommentList;
}