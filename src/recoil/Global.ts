import { atom, atomFamily } from 'recoil';

export const IsLogin = atom({
  key: 'IsLogin',
  default: false,
});

export const IsInstructor = atom({
  key: 'IsInstructor',
  default: false,
});

// 커뮤니티 좋아요 캐싱 구현을 위한 atom State
export const liekCollectionRefreshState = atomFamily({
  key: 'communityRefresh',
  default: 0,
});

// 자동 닫힘 Alert on/off atom State
export const autoCloseModalState = atomFamily<string, string>({
  key: 'autoCloseModal',
  default: '',
});
