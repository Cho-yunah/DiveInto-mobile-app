import instance from "@/src/lib/api/axios"
import { communityListState, listPageState, loadingState, refreshState } from "@/src/recoil/CommunityStack"
import { useEffect, useLayoutEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { ContentItem } from "./types"

export const useRequestCommunityList = ({share}): ContentItem[] => {
  
  const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);
  const [communityList, setCommunityList]= useRecoilState<ContentItem[]>(communityListState)
  const [refreshing, setRefreshing] = useRecoilState(refreshState)
  const listPage = useRecoilValue(listPageState)
  
  const url = share
    ? `/community/post/category?category=SHARE&page=${listPage}&size=10&sort=id,desc` 
    : `/community/post/category?category=Question&page=${listPage}&size=10&sort=id,desc`
  
  useEffect(()=> {
    console.log(url)
    const requestCommunityList = async() => {
      setIsLoading(true)
      try {
        // console.log('listPage', listPage)
        const {data} = await instance.get(url);
        // console.log('data', data) 

        data._embedded 
        && setCommunityList((list)=>
            [...list,...data._embedded.postsModelList]
          );
        // console.log('communityList-main',communityList)
      } catch(e) {
        console.log(e)
      }
      // setRefreshing(false)
      setIsLoading(false)
    };
    
    requestCommunityList();
  }, [listPage, refreshing])
  return communityList;
}