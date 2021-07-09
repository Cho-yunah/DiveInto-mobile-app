import { communityListState, listPageState, loadingState, refreshState } from "@/src/recoil/CommunityStack"
import axios from "axios"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue,  } from "recoil"
import { ContentItem } from "./types"

export const useRequestCommunityList = (): ContentItem[] => {
  const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);
  const [communityList, setCommunityList]= useRecoilState<ContentItem[]>(communityListState)
  const [refreshing, setRefreshing] = useRecoilState(refreshState)
  
  const listPage = useRecoilValue(listPageState)
  const URL = `http://52.78.56.229:8082/community/post/category?category=SHARE&page=0&size=1`

  useEffect(()=> {
    const requestCommunityList = async() => {
      try {
        setIsLoading(true)
        const {data} = await axios.get(URL);
        setTimeout(()=> {
          setIsLoading(false)
          setRefreshing(false)
          if(data._embedded === undefined) return
          setCommunityList(data._embedded.postsModelList|| []);
          console.log(communityList)
        },1000)
      } catch(e) {
        console.log(e)
      }
    };
    requestCommunityList();
  }, [])
  return communityList;
}