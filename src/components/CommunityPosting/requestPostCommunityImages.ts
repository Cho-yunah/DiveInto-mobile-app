import { ImageArrStateType, } from '@recoil/CommunityStack';
import { getInstanceATK } from '@lib/api/axios';
import { PostingBodyType, RequestPostCommunityType, RequestEditCommunityType } from './types';

export const getFormData = (
  images: ImageArrStateType[],
): FormData => {
  const body = new FormData();
  images.forEach(img => {
    body.append('images', {
      name: img.name,
      type: img.type,
      uri: img.uri,
    });
  });
  return body;
};

export const requestPostCommunity: RequestPostCommunityType =
  async (body: FormData | PostingBodyType,
         postingId?: number 
) => {
    const instanceAtk = await getInstanceATK();

   try {
    if (body instanceof FormData) {
      // console.log(body)
      const {data} = await instanceAtk.post(
        `/community/post/${postingId}/post-image`, body
         );
        // console.log(data);
        return data;

      } else {
        const {data}  = await instanceAtk.post('/community/post', body);
        // console.log('postingData',data);
        return data.postResource
      }
    } catch (e) {
      console.log(e.response)
    }
  };

  // 게시물 수정 요청
  export const requestEditCommunity: RequestEditCommunityType = async (body: PostingBodyType, id: number) => {
    const instanceAtk = await getInstanceATK();
    // console.log(body)
    // console.log(id)

    try {
      const {data} = await instanceAtk.put(`/community/post/${id}`, body)
      return data.postResource
    } catch(e) {
      console.log(e.response)
    }
  }