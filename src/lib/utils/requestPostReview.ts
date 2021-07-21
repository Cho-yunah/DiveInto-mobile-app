import { PicsArrStateType } from '@/src/recoil/ReviewStack';
import { PostReviewBodyType } from '@/src/screens/WriteReview/types';
import { getInstanceATK } from '../api/axios';

export type RequestPostReviewContentOrImagesType = {
  (body: PostReviewBodyType | FormData): Promise<number | Error>;
};

export const getFormData = (
  reservationId: number,
  reviewId: number,
  pictures: PicsArrStateType[],
): FormData => {
  const body = new FormData();
  body.append('reservationId', reservationId);
  body.append('reviewId', reviewId);

  //
  pictures.forEach(pic => {
    body.append('reviewImages', {
      name: pic.name,
      type: pic.type,
      uri: pic.uri,
    });
  });

  return body;
};

export const requestPostReviewContentOrImages: RequestPostReviewContentOrImagesType =
  async (body: PostReviewBodyType | FormData) => {
    const instanceAtk = await getInstanceATK();
    try {
      if (body instanceof FormData) {
        const { data } = await instanceAtk.post('/review/image/list', body);
        console.log(data);

        return data;
      } else {
        const { data } = await instanceAtk.post('/review', body);
        console.log(data);

        return data.reviewId;
      }
    } catch (e) {
      return e?.response;
    }
  };
