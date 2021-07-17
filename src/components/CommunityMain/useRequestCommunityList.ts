import instance from "@/src/lib/api/axios"
import { atkState, communityListState, listPageState, loadingState, refreshState } from "@/src/recoil/CommunityStack"
import AsyncStorage from "@react-native-community/async-storage"
import { useLayoutEffect } from "react"
import { useRecoilState, useRecoilValue,  } from "recoil"
import { ContentItem } from "./types"

export const useRequestCommunityList = (): ContentItem[] => {
  const [token, setToken] = useRecoilState(atkState)
  const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);
  const [communityList, setCommunityList]= useRecoilState<ContentItem[]>(communityListState)
  const [refreshing, setRefreshing] = useRecoilState(refreshState)

  // token 받아오기 - main list page로 옮기기
  useLayoutEffect(()=> {
    const getToken = async() => {
    try{
      const getTokenRequest= await AsyncStorage.getItem('token');
      setToken(getTokenRequest)
    } catch (error) {
      console.log(error)
    }
  } 
  getToken()
},[])
  
  const listPage = useRecoilValue(listPageState)

  useLayoutEffect(()=> {
    const requestCommunityList = async() => {
      setIsLoading(true)
      try {
        // console.log('listPage', listPage)
        const {data} = await instance.get(`/community/post/category?category=SHARE&page=${listPage}&size=10`);
        // console.log('data', data) 
         setCommunityList((list)=>[...list,...data._embedded.postsModelList]);
        // console.log('communityList-main',communityList)
      } catch(e) {
        console.log(e)
      }
      // setRefreshing(false)
      setIsLoading(false)
    };
    
    requestCommunityList();
  }, [listPage])
  return communityList;
}