import {atom} from 'recoil'

export type ContentItem = {
  id: number;
  title: string;
  dateOfRegistration: string;
  category: string;
  writerNickname: string;
  imageUrl: string;
  commentCount: number;
  likeCount: number;
  liked: boolean;
  onItemClick: ()=>void;
}

export const communityListState = atom<ContentItem[]>({
  key: 'communityListState',
  default: []
})

export const loadingState = atom<boolean>({
  key: 'lodingState',
  default : false
})

export const listPageState = atom<number>({
  key: 'listPageState',
  default : 0
})

export const refreshState = atom<boolean>({
  key: 'refreshState',
  default : false
})