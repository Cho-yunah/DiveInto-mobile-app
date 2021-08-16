import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import { getInstanceATK } from '@lib/api/axios';

import { userInfoProps } from '@screens/ProfileMain/types';
import { sliceTimeString, sliceDateString } from '@lib/utils/sliceNewString';
import theSameNameOfNumber from '@lib/utils/duplicateEquipment';
import { communityRefreshState } from './Global';

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

export type modifyNumViewStateAtomType = {
  phoneNumber: string;
  birth: string;
  gender: string;
};

export type reserveDetailListAtomType = {
  reservationId: number;
  dateOfReservation: string;
  numberOfPeople: number;
  paymentDetail:
    | {
        lectureCost: number;
        equipmentRentCost: number;
      }
    | undefined;
};

export type reserveLocationAtomType = {
  address: string;
  latitude: number;
  longitude: number;
};

export type reserveScheduleAtomType = {
  startTime: string;
  endTime: string;
  date: string;
}[];

export type reserveEquipmentsAtomType = {
  equipmentName: string;
  size: string;
  rentNumber: number;
}[];

export type reserveCostInfoTypesType = 'total' | 'lecture' | 'equipment';

export type CommunityLikeListStateType = {
  id: number;
  title: string;
  dateOfRegistration: string;
  category: string;
  writerNickname: string;
  imageUrl?: string;
  commentCount: number;
  likeCount: number;
  liked: boolean;
};

export const userInfoAtom = atom<userInfoProps | null>({
  key: 'userInfoAtom',
  default: {
    email: '',
    nickname: '',
    phone: '',
  },
});

export const modifyNumViewStateAtom = atom<modifyNumViewStateAtomType | null>({
  key: 'modifyNumViewState',
  default: {
    phoneNumber: '',
    birth: '',
    gender: '',
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

export const deleteReservationLectureListState = selectorFamily({
  key: 'deleteReservationLectureList',
  get:
    (id: number) =>
    ({ get }) => {
      const totalList = get(reservationLectureListState);

      console.log(totalList, id);
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

// 좋아요한 커뮤니티 리스트 상태
export const communityLikeListState = atom<CommunityLikeListStateType[]>({
  key: 'communityLikeList',
  default: [],
});

export const requestCommunityLikeListSelector = selector({
  key: '/community/post/like',
  get: async ({ get }) => {
    get(communityRefreshState);
    const instanceAtk = await getInstanceATK();

    try {
      const { data } = await instanceAtk.get(
        '/community/post/like?page=0&size=10',
      );

      console.log(data);

      if (!data.page.totalElements) return [];
      else return data._embedded.postsModelList;
    } catch (err) {
      console.log(err);
    }
  },
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

// 가격 타입 param에 따라서 가격 결과를 보내주는 셀렉터
export const totalCostSelector = selectorFamily({
  key: 'totalCost',
  get:
    (costType: reserveCostInfoTypesType) =>
    ({ get }) => {
      const paymentDetail = get(reserveDetailListState)?.paymentDetail;

      if (!paymentDetail) return 0;

      switch (costType) {
        case 'total':
          return paymentDetail?.equipmentRentCost + paymentDetail?.lectureCost;
        case 'lecture':
          return paymentDetail?.lectureCost;
        case 'equipment':
          return paymentDetail.equipmentRentCost;
        default:
          return 0;
      }
    },
});

// 같은 목록이면서 같은 사이즈 장비 수량 합을 구하는 셀렉터
export const sumOfTheSameListSelector = selector({
  key: 'sumOfSameList',
  get: ({ get }) => {
    const equipmentList = get(reserveEquipmentsState);

    if (!equipmentList.length) return [];

    console.log(theSameNameOfNumber(equipmentList));

    return theSameNameOfNumber(equipmentList);
  },
});

// 강의 일정 관련 데이터 문자열 새로운 조합으로 바꾸는 셀렉터
export const dateOrTimeOfNewStringSelector = selector({
  key: 'dateOrTimeOfNewString',
  get: ({ get }) => {
    const schedules = get(reserveScheduleState);

    if (!schedules.length) return [];

    const scheduleNewString = schedules.map(schedule => {
      const startTime = sliceTimeString(schedule.startTime);
      const endTime = sliceTimeString(schedule.endTime);
      const date = sliceDateString(schedule.date, 'yy.M.dd (E)');

      return { date, startTime, endTime };
    });

    return scheduleNewString;
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
