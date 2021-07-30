import { ContentItem, ImageArrStateType, PostingFormType, PostingItemType } from '@/src/recoil/CommunityStack';
import { getInstanceATK } from '../../lib/api/axios';

export type PostingBodyType= {
  [key: string]: string | string[]
}

type RequestPostCommunityType = {
  (body: FormData, postingId: number): Promise<undefined>;
  (body: PostingBodyType):Promise<ContentItem>
}

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
    // console.log('postingId', postingId)

   try {
    if (body instanceof FormData) {
      console.log(body)
      const {data} = await instanceAtk.post(
        `/community/post/${postingId}/post-image`, body
         );
        console.log(data);
        return data;

      } else {
        const {data}  = await instanceAtk.post('/community/post', body);
        console.log(data);
        return data.postResource
      }
    } catch (e) {
      console.log(e.response)
    }
  };