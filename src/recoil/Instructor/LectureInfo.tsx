import { atom } from 'recoil';

type TabList = '강의정보' | '전체일정';
export const CurrentTab = atom<TabList>({
  key: 'LectureInfoCurrentTab',
  default: '강의정보',
});
