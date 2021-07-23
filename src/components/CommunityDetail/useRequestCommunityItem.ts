import instance from '@/src/lib/api/axios';
import { communityItemState, ImageState, writerInfoState } from '@/src/recoil/CommunityStack';
import { useEffect } from 'react';
import  {useSetRecoilState} from 'recoil';

export const useRequestCommunityItem = (id: number) => {
  const setCommunityItem = useSetRecoilState(communityItemState);
  const setImageItem = useSetRecoilState(ImageState)
  const setWriterInfo = useSetRecoilState(writerInfoState)

  useEffect(()=> {
    const requestCommunityItem = async()=> {
      try {
        // data & image 받아오기
        const {data} = await instance.get(`/community/post/${id}`);
        const writerResource= await instance.get(`/community/post/${id}/writer`)
        const imageResource = await instance.get(`/community/post/${id}/post-image`)

        const { title, category, tags, dateOfRegistration,content, liked, likeCount } = data.postResource;
        const writerInfo = writerResource.data

        imageResource.data._embedded
          ? setImageItem(imageResource.data._embedded.postImageModelList)
          : setImageItem([])

        setWriterInfo(writerInfo)
        setCommunityItem({
          id, title,
          category,
          tags,
          dateOfRegistration,
          content,
          liked, likeCount
        });
      } catch(e) {
        console.log(e)
      }
    };
    requestCommunityItem();
  }, [])
}