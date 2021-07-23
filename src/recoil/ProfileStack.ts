import { atom, selector, selectorFamily } from 'recoil';
import instance from '../lib/api/axios';
import { userInfoProps } from '../screens/ProfileMain/types';

export type lectureReviewAllType = {
  id: number;
  instructorStar: number;
  lectureStar: number;
  locationStar: number;
  totalStarAvg: number;
  description: string;
  writeDate: Date;
  reviewImageUrls: string[];
};

export type reservationLectureListType = {
  reservationId: number;
  lectureTitle: string;
  organization: string;
  level: string;
  lectureImageUrl: string;
  instructorNickname: string;
  reservationDate: string;
  remainingDate: number;
}[];

export type lastReservationLectureListType = {
  remainingDate: string;
};

export const userInfoAtom = atom<userInfoProps | null>({
  key: 'userInfoAtom',
  default: {
    email: '',
    nickname: '',
    phone: '',
  },
});

export const atkState = atom<string | null>({
  key: 'atk',
  default: null,
});

export const LectureListState = atom({
  key: 'LectureList',
  default: [],
});

// export const lectureDetailState = atom({
//   key: 'lectureDetail',
//   default: {
//     id: 0, // 강의 id
//     title: '', // 강의 제목
//     classKind: '',
//     organization: '', // AIDA
//     level: '',
//     maxNumber: 0, // 최대 가능 인원
//     period: 0,
//     description: '', // 강의 설명
//     price: 0, // 가격
//     region: '', // 지역
//     reviewTotalAvg: 0, // 리뷰 전체 평점
//     reviewCount: 0, // 리뷰 개수
//     isMarked: false, // 찜하기 여부
//   },
// });

export const lectureReviewAllState = atom<lectureReviewAllType[]>({
  key: 'lectureReview',
  default: [],
});

export const reservationLectureListState =
  atom<reservationLectureListType | null>({
    key: 'reservationLectureList',
    default: null,
  });

export const nextReservationLectureListState = selector({
  key: 'nextReservationLectureList',
  get: ({ get }) => {
    const res = get(reservationLectureListState);

    const nextReservationLectureInfo = res?.filter(data =>
      data.remainingDate !== 365 ? data : null,
    );

    return nextReservationLectureInfo;
  },
});

export const lastReservationLectureListState = selector({
  key: 'lastReservationLectureList',
  get: ({ get }) => {
    const res = get(reservationLectureListState);

    const lastReservationLectureInfo = res?.filter(data =>
      data.remainingDate === 365 ? data : null,
    );

    return lastReservationLectureInfo;
  },
});
