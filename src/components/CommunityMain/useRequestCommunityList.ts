import instance, { getInstanceATK } from '@/src/lib/api/axios';
import {
  // communityLikeState,
  communityListState,
  listPageState,
  loadingState,
  refreshState,
} from '@/src/recoil/CommunityStack';
import { useEffect, useLayoutEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ContentItem } from './types';

export const useRequestCommunityList = ({ share }): ContentItem[] => {
  const [isLoading, setIsLoading] = useRecoilState<boolean>(loadingState);
  const [communityList, setCommunityList] =
    useRecoilState<ContentItem[]>(communityListState);

  // console.log(communityList);

  const [refreshing, setRefreshing] = useRecoilState(refreshState);
  const listPage = useRecoilValue(listPageState);

  const url = share
    ? `/community/post/category?category=SHARE&page=${listPage}&size=10&sort=id,desc`
    : `/community/post/category?category=Question&page=${listPage}&size=10&sort=id,desc`;

  useEffect(() => {
    console.log(url);
    const requestCommunityList = async () => {
      const instanceAtk = await getInstanceATK();

      setIsLoading(true);
      try {
        // console.log('listPage', listPage)
        const { data } = await instanceAtk.get(url);
        console.log('data', data);

        data._embedded &&
          setCommunityList(list => [...list, ...data._embedded.postsModelList]);

        // console.log('communityList-main',communityList)
      } catch (e) {
        console.log(e);
      }
      // setRefreshing(false)
      setIsLoading(false);
    };

    requestCommunityList();
  }, [listPage, refreshing]);

  return communityList;
};
