import { atom, atomFamily, selector, selectorFamily } from 'recoil';
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

export type instructorImageCollectionType = {
  size: number;
  uri: string;
  type: string;
  name: string;
};

export type deleteReasonStateType =
  | '원하는 정보가 존재하지 않아서'
  | '사용하기 불편해서'
  | '현재 사용하지 않는 앱이라서';

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

// 프로필 유저 이미지 상태 공유
export const ProfileImageURIState = atom<string | null>({
  key: 'ProfileImageURI',
  default: null,
});

// 강사 자격증 사진 정보 배열 정보
export const instructorImageCollectionState = atom<
  instructorImageCollectionType[]
>({
  key: 'instructorImageCollection',
  default: [],
});

export const WaitingCERTInstructorState = atom<'none' | 'done'>({
  key: 'WaitingCERTInstructor',
  default: 'none',
});

// 로그아웃 모달 on/off 상태
export const logoutModalOpenState = atom({
  key: 'logoutModalOpenState',
  default: false,
});

// 회원탈퇴 모달 on/off 상태
export const deleteModalOpenState = atom({
  key: 'deleteModalOpenState',
  default: false,
});

// 탈퇴 이유 dropdown 배열 상태
export const deleteReasonState = atom<deleteReasonStateType | null>({
  key: 'deleteReason',
  default: null,
});

// 기타 탈퇴 이유 textInput 상태
export const etcDeleteReasonState = atom<string>({
  key: 'EtcDeleteReason',
  default: '',
});

// 회원 탈퇴를 위한 PW 확인 상태
export const deletePasswordState = atom<string>({
  key: 'deletePassword',
  default: '',
});

// 회원 탈퇴 전에 작성해야 하는 조건 selector
export const deleteUserConditionSelector = selector({
  key: 'deleteUserCondition',
  get: ({ get }) => {
    const password = get(deletePasswordState);
    const selectOption = get(deleteReasonState);
    const etcOption = get(etcDeleteReasonState);

    if ((etcOption || selectOption) && password) {
      return true;
    } else {
      return false;
    }
  },
});

// 후기작성 스크린
export type PicsArrStateType = {
  size: number;
  uri: string;
  type: string;
  name: string;
};

export const ratingStarState = atomFamily<number, string>({
  key: 'ratingStar',
  default: 0,
});

export const contentState = atom<string>({
  key: 'content',
  default: '',
});

export const picsArrState = atom<PicsArrStateType[]>({
  key: 'picsArr',
  default: [],
});

export const isModalOpenState = atom({
  key: 'isModalOpen',
  default: false,
});
