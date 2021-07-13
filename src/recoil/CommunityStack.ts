import {atom, atomFamily, selector} from 'recoil'

export type ContentItem = {
  id: number;
  title: string;
  dateOfRegistration: string;
  category: string;
  writerNickname?: string;
  imageUrl?: string;
  commentCount: number;
  likeCount: number;
  liked?: boolean;
  onItemClick: ()=>void;
}

export const communityListState = atom<ContentItem[]>({
  key: 'communityListState',
  default: []
})

export const allCommunityListState = selector({
  key: 'allCommunityListState',
  get: ({get}) => {
    const list = get(communityListState)
    return list;
  }
})

// export const communityListFamily = atomFamily({
//   key: 'communityListFamily',
//   default: (id : string) => ({
//     id, 
//     title: '', 
//     dateOfRegistration: '', 
//     category: '', 
//     writerNickname: '', 
//     imageUrl: '',
//     commentCount: 0,
//     likeCount: 0,
//     liked: false
//   })
// })

// export const communityListSelector = selector({
//   key: 'communityListSelector',
//   get: ({get}) => {
//     const allCommunityListItem = get(communityListState)
//     return allCommunityListItem.map((id) => get(communityListFamily(id)))
//   }
// })

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