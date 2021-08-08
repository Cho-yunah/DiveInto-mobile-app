import { AxiosResponse } from 'axios';
import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import {
  DateTimeInfoType,
  MarkedDatesType,
} from '../components/ReserveLecture/types';
import instance, { getInstanceATK } from '../lib/api/axios';
export type LectureDetailPicsType = {
  url: string;
  // lectureImageId: number;
};
export type lectureReviewType = {
  id: number;
  instructorStar: number;
  lectureStar: number;
  locationStar: number;
  totalStarAvg: number;
  description: string;
  writeDate: string;
  reviewImageUrls: string[];
};

export type EquipmentStocksByScheduleIdType = {
  scheduleEquipmentStockId: number;
  size: string;
  quantity: number; // 전체 등록된 수량
  totalRentNumber: number; // 현재 대여 된 수량
};

export type selectedEquipmentsStateType = {
  id: number;
  name: string;
};

export type GetTheSameClassScheduleStateType = {
  color: string;
  selectedColor: string;
  selected: boolean;
  currentNumber: number;
  maxNumber: number;
  scheduleId: number;
  scheduleDateTimeId: number;
  startTime: string;
  endTime: string;
  date: string;
};

export type rentEquipmentInfosType = {
  scheduleEquipmentStockId: number;
  rentNumber: number; // 갯수
};

export type requestReservationEquipmentDetailType = {
  scheduleEquipmentStockId: number;
  rentNumber: number; // 갯수
  size: string; // 사이즈
  name: string; // 장비 이름
  price: number;
  totalRentNumber: number;
  quantity: number;
};

export type locationResponseType = {
  id?: number;
  address?: string;
  latitude: number;
  longitude: number;
};

export type EquipmentsByScheduleIdType = {
  scheduleEquipmentId: number;
  name: string;
  price: number;
  stockInfoList: EquipmentStocksByScheduleIdType[];
};

type TargetInfoType =
  | 'Info'
  | 'InstructorProfile'
  | 'LocationInfo'
  | 'LecturePics';

export type SortByType =
  | 'writeDate,DESC'
  | 'totalStarAvg,DESC'
  | 'totalStarAvg,ASC';

export type ProvidedEquipmentsType = {
  name: string;
  id: number;
  stocks: EquipmentStocksByScheduleIdType[];
};

export const searchText = atom({
  key: 'searchText',
  default: '',
});

export const lectureIdState = atom<null | number>({
  key: 'lectureId',
  default: null,
});

export const lectureModalState = atom<LectureDetailPicsType[]>({
  key: 'lectureModal',
  default: [],
});

export const lecutureModalSelectedIdxState = atom<number>({
  key: 'lectureModalFirstItemIdx',
  default: 0,
});

// common selectorFamily
export const lectureCommonSelectorFamily = selectorFamily({
  key: 'lectureCommonSelectorFamily',
  get:
    (targetInfo: TargetInfoType) =>
    async ({ get }) => {
      const lectureId = get(lectureIdState);
      if (!lectureId) return;

      const url =
        targetInfo === 'Info'
          ? `/lecture?id=${lectureId}`
          : targetInfo === 'InstructorProfile'
          ? `/lecture/instructor/info/creator?lectureId=${lectureId}`
          : targetInfo === 'LocationInfo'
          ? `/location?lectureId=${lectureId}`
          : `/lectureImage/list?lectureId=${lectureId}`;

      try {
        const instanceATK = await getInstanceATK();
        const { data }: AxiosResponse = await instanceATK.get(url);

        return data;
      } catch (e) {
        console.log(e);
      }
    },
});

export const sortByState = atom<SortByType>({
  key: 'sortBy',
  default: 'writeDate,DESC',
});

export const lectureSortedReviewSelector = selector<lectureReviewType[]>({
  key: 'lectureSortedReview',
  get: async ({ get }) => {
    const lectureId = get(lectureIdState);
    const sortBy = get(sortByState);

    try {
      const { data }: AxiosResponse = await instance.get(
        `/review/list?lectureId=${lectureId}&page=0&size=4&sort=${sortBy}`,
      );
      return data?._embedded?.reviewInfoList || [];
    } catch (e) {
      console.log(e);
    }
  },
});

// lectureCalendar
export const currMonthState = atom<number>({
  key: 'currMonth',
  default: new Date().getMonth() + 1,
});

export const currYearState = atom<number>({
  key: 'currYear',
  default: new Date().getFullYear(),
});

// selector caching 조절용 상태
export const cachingState = atom({
  key: 'caching',
  default: 0,
});
export const lectureScheduleListsSelector = selectorFamily({
  key: 'lectureScheduleLists',
  get:
    (lectureId: number) =>
    async ({ get }) => {
      get(cachingState); // caching 조절
      console.log('caching state changed.');

      const year = get(currYearState);
      const month = get(currMonthState);

      try {
        const { data } = await instance.get(
          `/schedule?lectureId=${lectureId}&year=${year}&month=${month}`,
        );

        return data._embedded?.scheduleInfoList || [];
      } catch (e) {
        console.log(e);
      }
    },
});

// 달력에 스케쥴 표시되는 날짜 정보들
export const markedDateState = atom<MarkedDatesType>({
  key: 'markedDate',
  default: {},
});

// 현재 클릭한 날짜의 수업 전체 id
export const currScheduleIdState = atom<number | null>({
  key: 'currScheduleId',
  default: null,
});

// 현재 클릭한 날짜 연월일 atom '2021-01-01'
export const currSelectedDateState = atom<string>({
  key: 'currSelectedDate',
  default: '',
});

// 날짜별 담은 배열 {'2021-01-01': [scheduleId, scheduleId, ...]}
export type ScheduleIdObjType = {
  [date: string]: number[];
};
export const scheduleIdObjState = atom<ScheduleIdObjType>({
  key: 'scheduleArrayByIdState',
  default: {},
});

export type SchedulesById = [
  { scheduleId: number; currentNumber: number; maxNumber: number },
  DateTimeInfoType[],
];

export const schedulesByIdState = atom<SchedulesById[]>({
  key: 'schedulesByIdState',
  default: [],
});

export const cachingStateFormClassScheduleState = atom({
  key: 'cachingStateFormClassScheduleState',
  default: 0,
});
export const getTheSameClassScheduleState = selector<SchedulesById[]>({
  key: 'getAllClassByDates',
  get: ({ get }) => {
    get(cachingStateFormClassScheduleState);
    const currSelectedDate = get(currSelectedDateState); // 선택한 날짜
    console.log(currSelectedDate);

    if (!currSelectedDate) return [];

    const scheduleIdObj = get(scheduleIdObjState); // 날짜별 수업id담은 객체
    const scheduleById = [...get(schedulesByIdState)].reverse();
    console.log(scheduleById, 'scheduleById');

    let idArray: any[] = [];

    // 선택한 날짜의 배열에 담긴 id값들을 저장.
    if (scheduleIdObj[currSelectedDate]) {
      idArray = [...new Set([...scheduleIdObj[currSelectedDate]])];

      const result = idArray.map(id => {
        return scheduleById.find(schedule => {
          return schedule[0].scheduleId === id;
        });
      });
      return result || [];
    }
    return [];
  },
});

export const selectedClassByIdSelector = selector({
  key: 'selectedClassByIdSelector',
  get: ({ get }) => {
    const scheduleId = get(currScheduleIdState);
    const scheduleByIdObj = get(schedulesByIdState);

    return (
      scheduleByIdObj.find(schedule => schedule[0].scheduleId === scheduleId) ||
      []
    );
  },
});

// 현재 scheduleId에서 제공해주는 대여 장비 목록, 재고
export const getEquipmentsStateByScheduleId = selectorFamily<
  EquipmentsByScheduleIdType[],
  number | null
>({
  key: 'getEquipments',
  get:
    (scheduleId: number | null) =>
    async ({ get }) => {
      if (!scheduleId) return [];

      get(cachingState);
      try {
        const { data } = await instance.get(
          `/schedule/equipments?scheduleId=${scheduleId}`,
        );

        return data._embedded.rentEquipmentInfoList;
      } catch (e) {
        console.log(e);
      }
    },
});

// 현재 선택된 대여 장비 정보
export const selectedEquipmentsIdState = atom<selectedEquipmentsStateType>({
  key: 'selectedEquipmentsId',
  default: {
    id: 0,
    name: '',
  },
});

// 장비 id값 별로 이름,수량, 사이즈 정보베열.
export const providedEquipmentsState = atomFamily<
  ProvidedEquipmentsType,
  number
>({
  key: 'eachEquipment',
  default: {
    name: '',
    id: 0,
    stocks: [],
  },
});

// 수강 인원
export const studentNumberState = atom<number>({
  key: 'studentNumber',
  default: 1,
});

export const smallModalMessageState = atom<string>({
  key: 'smallModalMessageState',
  default: '',
});

export type ReservationEquipmentObjType = {
  [key: number]: LargerEquipmentType;
};
type LargerEquipmentType = {
  name: string;
  price: number;
  equipmentStocks: SmallerEquipmentType;
};

type SmallerEquipmentType = {
  [key: number]: requestReservationEquipmentDetailType;
};

// rentEquipment.tsx에서 빈객체로 상태 초기화 해준다 => 언제? -> scheduleId값이 바뀔때마다.
export const reservationEquipmentObjState = atom<ReservationEquipmentObjType>({
  key: 'reservationEquipmentObjState',
  default: {},
});

export const requestReservationEquipmentArrayState = atom<
  requestReservationEquipmentDetailType[]
>({
  key: 'requestReservationEquipmentArrayState',
  default: [],
});
