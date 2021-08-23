import { atom, atomFamily, selector } from 'recoil';

type Schedule = {
  startTime: string; // hh:mm:ss
  endTime: string; // hh:mm:ss
  date: string; // YYYY-MM-DD
};

export const DateTimeCreateInfos = atom<Schedule[]>({
  key: 'DateTimeCreateInfos',
  default: [],
});

export const OnNewSchedule = atom({
  key: 'OnNewSchedule',
  default: false,
});
