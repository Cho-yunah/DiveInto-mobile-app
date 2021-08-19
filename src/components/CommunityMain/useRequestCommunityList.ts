import instance from "@/src/lib/api/axios"
import { getInstanceATK } from '@/src/lib/api/axios';
import { shareLoadingState, ContentItem, commentRequestState, questionListState, questionListPageState, shareListState, shareListPageState, refreshShareState, refreshQuestionState  } from "@/src/recoil/CommunityStack"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"

export const useRequestCommunityList = ({requestPage}: {requestPage: string}): ContentItem[] => {
  
  const setShareLoading = useSetRecoilState<boolean>(shareLoadingState);
  const setQuestionLoading = useSetRecoilState<boolean>(shareLoadingState);
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
      {requestPage === "SHARE" 
        ? setShareLoading(true) 
        : setQuestionLoading(true)}
      const instanceAtk = await getInstanceATK();
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
        {requestPage === "SHARE" 
          ? setShareLoading(false) 
          : setQuestionLoading(false)}
    };

    requestCommunityList();
  }, [sharePage, questionPage, refreshShare, refreshQuestion, changeCommentState, requestPage])

  return requestPage === 'SHARE'? shareList: questionList;
}

