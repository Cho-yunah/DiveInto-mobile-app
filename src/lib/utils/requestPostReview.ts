import { PicsArrStateType } from '@/src/recoil/ReviewStack';
import { PostReviewBodyType } from '@/src/screens/WriteReview/types';
import { getInstanceATK } from '../api/axios';

export const requestPostReviewContent = async (body: PostReviewBodyType) => {
  try {
    const instanceAtk = await getInstanceATK();
    const { data } = await instanceAtk.post(`/review`, body);
    console.log(data);
    return data.reviewId;
  } catch (e) {
    console.log(e.response);
  }
};

export const requestPostReviewImages = async (
  reservationId: number,
  reviewId: number,
  pictures: PicsArrStateType[],
) => {
  const body = new FormData();
  body.append('reservationId', reservationId);
  body.append('reviewId', reviewId);
  pictures.forEach(pic => {
    body.append('reviewImages', {
      name: pic.name,
      type: pic.type,
      uri: pic.uri,
    });
  });

  try {
    const instanceAtk = await getInstanceATK();
    const { data } = await instanceAtk.post('/review/image/list', body);
    console.log(data);
  } catch (e) {
    console.log(e.response);
  }
};
