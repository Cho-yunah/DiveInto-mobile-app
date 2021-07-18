import instance from '@/src/lib/api/axios';
import { commentState, communityItemState, ImageState, writerInfoState } from '@/src/recoil/CommunityStack';
import { useEffect } from 'react';
import  {atom, useSetRecoilState} from 'recoil';

export const useRequestCommunityItem = (id: number) => {
  const setCommunityItem = useSetRecoilState(communityItemState);
  const setImageItem = useSetRecoilState(ImageState)
  const setWriterInfo = useSetRecoilState(writerInfoState)
  const setComment = useSetRecoilState(commentState)

  useEffect(()=> {
    const requestCommunityItem = async()=> {
      try {
        // data & image 받아오기
        const {data} = await instance.get(`/community/post/${id}`);
        const writerResource= await instance.get(`/community/post/${id}/writer`)
        const imageResource = await instance.get(`/community/post/${id}/post-image`)
        const commentResource = await instance.get(`/community/comment/${id}`)

        const { title, category, tags, dateOfRegistration,content } = data.postResource;
        const writerInfo = writerResource.data

        imageResource.data._embedded 
          ? setImageItem(imageResource.data._embedded.postImageModelList)
          : setImageItem([])
        commentResource && setComment(commentResource.data)
        setWriterInfo(writerInfo)
        setCommunityItem({
          id, title,
          category,
          tags,
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