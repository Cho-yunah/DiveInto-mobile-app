import instance from "@/src/lib/api/axios"
import { communityListState, listPageState, loadingState, refreshState } from "@/src/recoil/CommunityStack"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { ContentItem } from "./types"

export const useRequestCommunityList = ({requestPage}): ContentItem[] => {
  
  const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);
  const [communityList, setCommunityList]= useRecoilState<ContentItem[]>(communityListState)
  const [refreshing, setRefreshing] = useRecoilState(refreshState)
  const listPage = useRecoilValue(listPageState)
  console.log(requestPage)
  
  const url =
    `/community/post/category?category=${requestPage}&page=${listPage}&size=10&sort=id,desc` 
  
  useEffect(()=> {
    console.log(url)
    const requestCommunityList = async() => {
      setIsLoading(true)
      try {
        const {data} = await instance.get(url);
        data._embedded && listPage === 0
          ? ( setCommunityList((list)=>
              [...data._embedded.postsModelList]
            )) 
          : ( setCommunityList((list)=>
              [...list, ...data._embedded.postsModelList]
            ))
          } catch(e) {
            console.log(e)
          }
      setRefreshing(false)
      setIsLoading(false)
    };
    requestCommunityList();
  }, [listPage, refreshing])
  return communityList;
}