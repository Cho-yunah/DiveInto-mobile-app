import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import instance from '../lib/api/axios';

export type LectureDetailPicsType = {
  url: string;
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
export const searchText = atom({
  key: 'searchText',
  default: '',
});

export const lectureIdState = atom<null | number>({
  key: 'lectureId',
  default: null,
});

export const requestLocationInfoSelector = selectorFamily({
  key: 'requestLocationInfo',
  get:
    (lectureId: number) =>
    async ({ get }) => {
      try {
        const { data } = await instance.get(`/location?lectureId=${lectureId}`);
        return data;
      } catch (e) {
        console.log(e);
      }
    },
});

export const lectureModalState = atom<LectureDetailPicsType[]>({
  key: 'lectureModal',
  default: [],
});

export const lecutureModalSelectedIdxState = atom<number>({
  key: 'lectureModalFirstItemIdx',
  default: 0,
});

export const lectureDetailPicsState = atom<LectureDetailPicsType[]>({
  key: 'lectrueDetailPics',
  default: [],
});

export const lectureDetailState = atom({
  key: 'lectureDetail',
  default: {
    id: 0, // 강의 id
    title: '', // 강의 제목
    classKind: '',
    organization: '', // AIDA
    level: '',
    maxNumber: 0, // 최대 가능 인원
    period: 0,
    description: '', // 강의 설명
    price: 0, // 가격
    region: '', // 지역
    reviewTotalAvg: 0, // 리뷰 전체 평점
    reviewCount: 0, // 리뷰 개수
    isMarked: false, // 찜하기 여부
  },
});

export const lectureInstructorProfileState = atom({
  key: 'lectureInstructorDetail',
  default: {
    instructorId: 0,
    nickName: '',
    selfIntroduction: '',
    profilePhotoUrl: '',
  },
});

export const lectureInfoSelector = selector({
  key: 'lectureInfoSelector',
  get: ({ get }): LectureInfoSelectorType => {
    const { title, organization, level, description, price } =
      get(lectureDetailState);

    return { title, organization, level, description, price };
  },
});

export const lectureReviewState = atom<lectureReviewType[]>({
  key: 'lectureReview',
  default: [],
});

// lectureCalendar
export const currMonthState = atom<number>({
  key: 'currnMonth',
  default: new Date().getMonth() + 1,
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

      const month = get(currMonthState);
      console.log(`현재 달${month}`);

      try {
        const { data } = await instance.get(
          `/schedule?lectureId=${lectureId}&month=${month}`,
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
