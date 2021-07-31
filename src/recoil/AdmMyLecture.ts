import { atom } from 'recoil';

type filterTagList = '등록순' | '최신강의순' | '낮은가격순' | '높은가격순';

export const SelectedFilterTag = atom<filterTagList>({
  key: 'SelectedFilterTag',
  default: '등록순',
});
