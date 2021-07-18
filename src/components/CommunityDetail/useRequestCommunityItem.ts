import instance from '@/src/lib/api/axios';
import { communityItemState, ImageState } from '@/src/recoil/CommunityStack';
import { useEffect } from 'react';
import  {useSetRecoilState} from 'recoil';

export const useRequestCommunityItem = (id: number) => {
  const setCommunityItem = useSetRecoilState(communityItemState);
  const setImageItem = useSetRecoilState(ImageState)

  useEffect(()=> {
    const requestCommunityItem = async()=> {
      try {
        // data & image 받아오기
        const {data} = await instance.get(`/community/post/${id}`);
        const imageResource = await instance.get(`/community/post/${id}/post-image`)

        const { title, category, tag, dateOfRegistration,content } = data.postResource;
        imageResource.data._embedded 
        ? setImageItem(imageResource.data._embedded.postImageModelList)
        : setImageItem([])
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