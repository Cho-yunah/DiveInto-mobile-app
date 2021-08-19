import { atom, atomFamily } from 'recoil';

type filterTagList = '등록순' | '최신강의순' | '낮은가격순' | '높은가격순';

export const SelectedFilterTag = atom<filterTagList>({
  key: 'SelectedFilterTag',
  default: '등록순',
});

export const LectureIdList = atom<number[]>({
  key: 'LectureIdList',
  default: [],
});

export const SelectTimes = atom<string[]>({
  key: 'AddScheduleSelectTimes',
  default: [],
});

type ScheduleInfo = {
  scheduleId: number;
  currentNumber: number;
  maxNumber: number;
  dateTimeInfos: {
    scheduleDateTimeId: number;
    startTime: string; //HH:MM:ss
    endTime: string; //HH:MM:ss
    date: string; //YYYY-MM-DD
  }[];
};
export const LectureSchedule = atomFamily<ScheduleInfo[], number>({
  key: 'EachLectureSchedule',
  default: [],
});
