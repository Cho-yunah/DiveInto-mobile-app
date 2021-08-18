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
  key: 'ReserveLectureCachingState',
  default: 0,
});

export const modifyNumViewStateAtom = atom<modifyNumViewStateAtomType | null>({
  key: 'modifyNumViewState',
  default: {
    phoneNumber: '',
    birth: '',
    gender: '',
  },
});

// async selector Caching Techniques
export const atkState = atom<string | null>({
  key: 'atk',
  default: null,
});

export const lectureReviewAllState = atom<lectureReviewAllType[]>({
  key: 'lectureReview',
  default: [],
});

export const reservationLectureListState = atom<
  reservationLectureListType[] | null
>({
  key: 'reservationLectureList',
  default: null,
});

// 프로필 유저 이미지 상태 공유
export const ProfileImageURIState = atom<string | 'change' | null>({
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

// 유저 프로필 정보와 번호 변경에 필요한 전화번호 상태
export const PhoneNumState = atom<string>({
  key: 'PhoneNum',
  default: '',
});

// 예약한 강의 상세 정보 상태
export const reserveDetailListState = atom<reserveDetailListAtomType | null>({
  key: 'ReserveDetailList',
  default: null,
});
// 예약한 강의 일정 정보 상태
export const reserveScheduleState = atom<reserveScheduleAtomType>({
  key: 'reserveSchedule',
  default: [],
});

// 예약한 강의 상세 위치
export const reserveLocationState = atom<reserveLocationAtomType | null>({
  key: 'reserveLocation',
  default: null,
});

// 예약한 강의에서 사용하는 대여 장비 상세 정보
export const reserveEquipmentsState = atom<reserveEquipmentsAtomType>({
  key: 'reserveEquipments',
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
