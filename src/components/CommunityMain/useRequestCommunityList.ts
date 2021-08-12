import instance from "@/src/lib/api/axios"
import { loadingState, ContentItem, commentRequestState, questionListState, questionListPageState, shareListState, shareListPageState, refreshShareState, refreshQuestionState } from "@/src/recoil/CommunityStack"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"

export const useRequestCommunityList = ({requestPage}): ContentItem[] => {
  
  const setIsLoading = useSetRecoilState<boolean>(loadingState);
  const [shareList, setShareList]= useRecoilState<ContentItem[]>(shareListState)
  const [questionList, setQuestionList]= useRecoilState<ContentItem[]>(questionListState)

  const sharePage = useRecoilValue(shareListPageState)
  const questionPage = useRecoilValue(questionListPageState)

  const [refreshShare, setRefreshShare] = useRecoilState(refreshShareState)
  const [refreshQuestion, setRefreshQuestion] = useRecoilState(refreshQuestionState)

  const changeCommentState = useRecoilValue(commentRequestState)
  
  const url =
    requestPage === 'SHARE'
      ? `/community/post/category?category=${requestPage}&page=${sharePage}&size=10&sort=id,desc` 
      :  `/community/post/category?category=${requestPage}&page=${questionPage}&size=10&sort=id,desc` 
  
  useEffect(()=> {
    const requestCommunityList = async() => {
      setIsLoading(true)
      try {
        const {data} = await instance.get(url);
        console.log(url)
        requestPage === 'SHARE' 
          ? ( data._embedded && sharePage === 0
              ? ( setShareList((list)=>
                  [...data._embedded.postsModelList])) 
              : ( setShareList((list)=>
                  [...list, ...data._embedded.postsModelList]))
            ) 
          : 
            ( data._embedded && questionPage === 0
              ? ( setQuestionList((list)=>
                  [...data._embedded.postsModelList])) 
              : ( setQuestionList((list)=>
                [...list, ...data._embedded.postsModelList]))
            )
            console.log(data)
          } catch(e) {
            console.log(e)
          }
        setRefreshShare(false)
        setRefreshQuestion(false)
        setIsLoading(false)
    };
    requestCommunityList();
  }, [sharePage, questionPage, refreshShare, refreshQuestion, changeCommentState, requestPage])

  return requestPage === 'SHARE'? shareList: questionList;
}