import instance from '@/src/lib/api/axios';
import { communityItemState } from '@/src/recoil/CommunityStack';
import { useEffect } from 'react';
import  {useSetRecoilState} from 'recoil';

export const useRequestCommunityItem = (id: number) => {
  const setCommunityItem = useSetRecoilState(communityItemState);

  useEffect(()=> {
    const requestCommunityItem = async()=> {
      try {
        const {data} = await instance.get(`/community/post/${id}`);
        console.log(data)

       const {
        title,
        category,
        tag,
        dateOfRegistration,
        content,
      } = data.postResource;
      setCommunityItem({
        id, title,
        category,
        tag,
        dateOfRegistration,
        content,
      });
      } catch(e) {
        console.log(e)
      }
    };
    requestCommunityItem();
  }, [])
}