import { atom, atomFamily } from 'recoil';

// export type lectureReviewAllType = {
//   id: number;
//   instructorStar: number;
//   lectureStar: number;
//   locationStar: number;
//   totalStarAvg: number;
//   description: string;
//   writeDate: Date;
//   reviewImageUrls: string[];
// };

// export type reservationLectureListType = {
//   reservationId: number;
//   lectureTitle: string;
//   organization: string;
//   level: string;
//   lectureImageUrl: string;
//   instructorNickname: string;
//   reservationDate: string;
//   remainingDate: number;
// };

// export type instructorImageCollectionType = {
//   size: number;
//   uri: string;
//   type: string;
//   name: string;
// };

// export type deleteReasonStateType =
//   | '원하는 정보가 존재하지 않아서'
//   | '사용하기 불편해서'
//   | '현재 사용하지 않는 앱이라서';

// export type modifyNumViewStateAtomType = {
//   phoneNumber: string;
//   birth: string;
//   gender: string;
// };

// export type reserveDetailListAtomType = {
//   reservationId: number;
//   dateOfReservation: string;
//   numberOfPeople: number;
//   paymentDetail:
//     | {
//         lectureCost: number;
//         equipmentRentCost: number;
//       }
//     | undefined;
// };

// export type reserveLocationAtomType = {
//   address: string;
//   latitude: number;
//   longitude: number;
// };

// export type reserveScheduleAtomType = {
//   startTime: string;
//   endTime: string;
//   date: string;
// }[];

// export type reserveEquipmentsAtomType = {
//   equipmentName: string;
//   size: string;
//   rentNumber: number;
// }[];

// export type reserveCostInfoTypesType = 'total' | 'lecture' | 'equipment';

// export const ReserveLectureCachingState = atom({
//   key: 'ReserveLectureCachingState',
//   default: 0,
// });

// export const modifyNumViewStateAtom = atom<modifyNumViewStateAtomType | null>({
//   key: 'modifyNumViewState',
//   default: {
//     phoneNumber: '',
//     birth: '',
//     gender: '',
//   },
// });

// export const atkState = atom<string | null>({
//   key: 'atk',
//   default: null,
// });

// export const lectureReviewAllState = atom<lectureReviewAllType[]>({
//   key: 'lectureReview',
//   default: [],
// });

// export const reservationLectureListState = atom<
//   reservationLectureListType[] | null
// >({
//   key: 'reservationLectureList',
//   default: null,
// });

// export const ProfileImageURIState = atom<string | 'change' | null>({
//   key: 'ProfileImageURI',
//   default: null,
// });

// export const instructorImageCollectionState = atom<
//   instructorImageCollectionType[]
// >({
//   key: 'instructorImageCollection',
//   default: [],
// });

// export const logoutModalOpenState = atom({
//   key: 'logoutModalOpenState',
//   default: false,
// });

// export const deleteModalOpenState = atom({
//   key: 'deleteModalOpenState',
//   default: false,
// });

// export const deleteReasonState = atom<deleteReasonStateType | null>({
//   key: 'deleteReason',
//   default: null,
// });

// export const etcDeleteReasonState = atom<string>({
//   key: 'EtcDeleteReason',
//   default: '',
// });

// export const deletePasswordState = atom<string>({
//   key: 'deletePassword',
//   default: '',
// });

// export const PhoneNumState = atom<string>({
//   key: 'PhoneNum',
//   default: '',
// });

// export const reserveDetailListState = atom<reserveDetailListAtomType | null>({
//   key: 'ReserveDetailList',
//   default: null,
// });

// export const reserveScheduleState = atom<reserveScheduleAtomType>({
//   key: 'reserveSchedule',
//   default: [],
// });

// export const reserveLocationState = atom<reserveLocationAtomType | null>({
//   key: 'reserveLocation',
//   default: null,
// });

// export const reserveEquipmentsState = atom<reserveEquipmentsAtomType>({
//   key: 'reserveEquipments',
//   default: [],
// });

// 수강 내역에서 예약한 강의 / 지난 강의를 분리하는 selector
// export const requestLectureScheduleListSelector = selectorFamily({
//   key: 'requestLectureScheduleList',
//   get:
//     (scheduleType: 'next' | 'last') =>
//     async ({ get }) => {
//       get(ReserveLectureCachingState);
//       const instanceAtk = await getInstanceATK();

//       try {
//         console.log('Rerendering');

//         const { data } = await instanceAtk.get(
//           '/reservation/list?page=0&size=15&sort=dateOfReservation,DESC',
//         );

//         if (!data.page.totalElements) return [];

//         const schedule = data._embedded.reservationInfoList;

//         switch (scheduleType) {
//           case 'next':
//             return schedule.filter(
//               (data: reservationLectureListType) => data.remainingDate !== 365,
//             );
//           case 'last':
//             return schedule.filter(
//               (data: reservationLectureListType) => data.remainingDate === 365,
//             );
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     },
// });

// // likeListType 조건에 따라 찜한 리스트 dataFetching selector
// export const requestLikeListSelector = selectorFamily({
//   key: 'requestLikeList',
//   get:
//     (likeListType: 'community' | 'lecture') =>
//     async ({ get }) => {
//       const [uri, dataStoreName] =
//         likeListType === 'community'
//           ? ['/community/post/like?page=0&size=10', 'postsModelList']
//           : ['/lecture/like/list?page=0&size=5', 'likeLectureInfoList'];

//       get(liekCollectionRefreshState(likeListType));
//       const instanceAtk = await getInstanceATK();

//       try {
//         const { data } = await instanceAtk.get(uri);

//         if (!data.page.totalElements) return [];
//         else return data._embedded[dataStoreName];
//       } catch (err) {
//         console.log(err);
//       }
//     },
// });

// 회원 탈퇴 전에 작성해야 하는 조건 selector
// export const deleteUserConditionSelector = selector({
//   key: 'deleteUserCondition',
//   get: ({ get }) => {
//     const password = get(deletePasswordState);
//     const selectOption = get(deleteReasonState);
//     const etcOption = get(etcDeleteReasonState);

//     if ((etcOption || selectOption) && password) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// 가격 타입 param에 따라서 가격 결과를 보내주는 셀렉터
// export const totalCostSelector = selectorFamily({
//   key: 'totalCost',
//   get:
//     (costType: reserveCostInfoTypesType) =>
//     ({ get }) => {
//       const paymentDetail = get(reserveDetailListState)?.paymentDetail;

//       if (!paymentDetail) return 0;

//       switch (costType) {
//         case 'total':
//           return paymentDetail?.equipmentRentCost + paymentDetail?.lectureCost;
//         case 'lecture':
//           return paymentDetail?.lectureCost;
//         case 'equipment':
//           return paymentDetail.equipmentRentCost;
//         default:
//           return 0;
//       }
//     },
// });

// 같은 목록이면서 같은 사이즈 장비 수량 합을 구하는 셀렉터
// export const sumOfTheSameListSelector = selector({
//   key: 'sumOfSameList',
//   get: ({ get }) => {
//     const equipmentList = get(reserveEquipmentsState);

//     if (!equipmentList.length) return [];

//     console.log(theSameNameOfNumber(equipmentList));

//     return theSameNameOfNumber(equipmentList);
//   },
// });

// 강의 일정 관련 데이터 문자열 새로운 조합으로 바꾸는 셀렉터
// export const dateOrTimeOfNewStringSelector = selector({
//   key: 'dateOrTimeOfNewString',
//   get: ({ get }) => {
//     const schedules = get(reserveScheduleState);

//     if (!schedules.length) return [];

//     const scheduleNewString = schedules.map(schedule => {
//       const startTime = sliceTimeString(schedule.startTime);
//       const endTime = sliceTimeString(schedule.endTime);
//       const date = sliceDateString(schedule.date, 'yy.M.dd (E)');

//       return { date, startTime, endTime };
//     });

//     return scheduleNewString;
//   },
// });

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
