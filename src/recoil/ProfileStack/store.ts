import { atom, atomFamily } from 'recoil';

import {
  deleteReasonStateType,
  instructorImageCollectionType,
  lectureReviewAllType,
  modifyNumViewStateAtomType,
  reservationLectureListType,
  reserveDetailListAtomType,
  reserveEquipmentsAtomType,
  reserveLocationAtomType,
  reserveScheduleAtomType,
} from './types';

// deleteReserve(예약강의삭제 id)
export const ReserveLectureCachingState = atom({
  key: 'profile/ReserveLectureCachingState',
  default: 0,
});

export const WriteReviewCachingState = atom({
  key: 'profile/WriteReviewCachingState',
  default: 0,
});

export const modifyNumViewStateAtom = atom<modifyNumViewStateAtomType | null>({
  key: 'profile/modifyNumViewState',
  default: {
    phoneNumber: '',
    birth: '',
    gender: '',
  },
});

// async selector Caching Techniques
export const atkState = atom<string | null>({
  key: 'profile/atk',
  default: null,
});

export const lectureReviewAllState = atom<lectureReviewAllType[]>({
  key: 'profile/lectureReview',
  default: [],
});

export const reservationLectureListState = atom<
  reservationLectureListType[] | null
>({
  key: 'profile/reservationLectureList',
  default: null,
});

// 프로필 유저 이미지 상태 공유
export const ProfileImageURIState = atom<string | 'change' | null>({
  key: 'profile/ProfileImageURI',
  default: null,
});

// 강사 자격증 사진 정보 배열 정보
export const instructorImageCollectionState = atom<
  instructorImageCollectionType[]
>({
  key: 'profile/instructorImageCollection',
  default: [],
});

// 로그아웃 모달 on/off 상태
export const logoutModalOpenState = atom({
  key: 'profile/logoutModalOpenState',
  default: false,
});

// 회원탈퇴 모달 on/off 상태
export const deleteModalOpenState = atom({
  key: 'profile/deleteModalOpenState',
  default: false,
});

// 탈퇴 이유 dropdown 배열 상태
export const deleteReasonState = atom<deleteReasonStateType | null>({
  key: 'profile/deleteReason',
  default: null,
});

// 기타 탈퇴 이유 textInput 상태
export const etcDeleteReasonState = atom<string>({
  key: 'profile/EtcDeleteReason',
  default: '',
});

// 회원 탈퇴를 위한 PW 확인 상태
export const deletePasswordState = atom<string>({
  key: 'profile/deletePassword',
  default: '',
});

// 유저 프로필 정보와 번호 변경에 필요한 전화번호 상태
export const PhoneNumState = atom<string>({
  key: 'profile/PhoneNum',
  default: '',
});

// 예약한 강의 상세 정보 상태
export const reserveDetailListState = atom<reserveDetailListAtomType | null>({
  key: 'profile/ReserveDetailList',
  default: null,
});
// 예약한 강의 일정 정보 상태
export const reserveScheduleState = atom<reserveScheduleAtomType>({
  key: 'profile/reserveSchedule',
  default: [],
});

// 예약한 강의 상세 위치
export const reserveLocationState = atom<reserveLocationAtomType | null>({
  key: 'profile/reserveLocation',
  default: null,
});

// 예약한 강의에서 사용하는 대여 장비 상세 정보
export const reserveEquipmentsState = atom<reserveEquipmentsAtomType>({
  key: 'profile/reserveEquipments',
  default: [],
});

// 후기작성 스크린
export type PicsArrStateType = {
  size: number;
  uri: string;
  type: string;
  name: string;
};

export const ratingStarState = atomFamily<number, string>({
  key: 'profile/ratingStar',
  default: 0,
});

export const contentState = atom<string>({
  key: 'profile/content',
  default: '',
});

export const picsArrState = atom<PicsArrStateType[]>({
  key: 'profile/picsArr',
  default: [],
});

export const isModalOpenState = atom({
  key: 'profile/isModalOpen',
  default: false,
});
