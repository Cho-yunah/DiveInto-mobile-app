import { AxiosResponse } from 'axios';
import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import instance from '../lib/api/axios';

export type LectureDetailPicsType = {
  url: string;
  lectureImageId: number;
};
export type lectureReviewType = {
  id: number;
  instructorStar: number;
  lectureStar: number;
  locationStar: number;
  totalStarAvg: number;
  description: string;
  writeDate: Date;
  reviewImageUrls: string[];
};

export type LectureInfoSelectorType = {
  title: string;
  organization: string;
  level: string;
  description: string;
  price: number;
};

export type EquipmentStocksType = {
  id: number;
  size: string;
  quantity: number;
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
};

export type locationResponseType = {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
};

export type EquipmentsType = {
  id: number;
  name: string;
  price: number;
  equipmentStocks: EquipmentStocksType[];
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
        const { data }: AxiosResponse = await instance.get(url);

        console.log(data);

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
      console.log(data, '리뷰 ㅂ열');
      return data?._embedded?.reviewInfoList || [];
    } catch (e) {
      console.log(e);
    }
  },
});

export const lectureReviewState = atom<lectureReviewType[]>({
  key: 'lectureReview',
  default: [],
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
      console.log(`현재 ${year}년 ${month}월`);

      try {
        const { data } = await instance.get(
          `/schedule?lectureId=${lectureId}&year=${year}&month=${month}`,
        );

        console.log(data._embedded?.scheduleInfoList);
        return data._embedded?.scheduleInfoList || [];
      } catch (e) {
        console.log(e);
      }
    },
});

// 달력에 스케쥴 표시되는 날짜 정보들
export const markedDateState = atom<any>({
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

// 같은 수업의 일정이 담긴 배열만 반환해주는 셀렉터
export const getTheSameClassScheduleState = selector<
  GetTheSameClassScheduleStateType[]
>({
  key: 'getTheSameClassSchedule',
  get: ({ get }) => {
    const markedDates = get(markedDateState);
    let scheduleId = get(currScheduleIdState);
    const currSelectedDate = get(currSelectedDateState);
    const sameClassArr = [];

    if (!(currSelectedDate in markedDates)) return [];

    for (const s in markedDates) {
      if (markedDates[s].scheduleId === scheduleId)
        sameClassArr.push(markedDates[s]);
    }

    return sameClassArr;
  },
});

// 현재 강의에서 제공해주는 대여 장비 목록
export const getEquipmentsState = selectorFamily<EquipmentsType[], number>({
  key: 'getEquipments',
  get: (lectureId: number) => async () => {
    try {
      const { data } = await instance.get(
        `/equipment/list?lectureId=${lectureId}`,
      );
      console.log(data);

      return data._embedded.equipmentDtoList;
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

// 장비 id값을 넣어서 수량, 사이즈 정보 관리.
export const eachEquipmentState = atomFamily({
  key: 'eachEquipment',
  default: {
    name: '',
    id: 0,
    stocks: [],
  },
});

// modal에 표시할 장비 이름과, 사이즈 정보 배열
export const selectedEquipmentsState = atom({
  key: 'selectedEquipments',
  default: [],
});

// 한 장비와 그 장비의 사이즈들의 예약 정보를 담고있는 배열

export const requestReservationEquipmentState = atomFamily<
  requestReservationEquipmentDetailType[],
  number
>({
  key: 'requestReservationEquipment',
  default: [],
});

// 수강 인원
export const studentNumberState = atom<number>({
  key: 'studentNumber',
  default: 1,
});
