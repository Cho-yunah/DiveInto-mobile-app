import {atom, atomFamily, selector, selectorFamily} from 'recoil'

export type ContentItem = {
  id: number;
  title: string;
  dateOfRegistration: string;
  category: string;
  writerNickname?: string;
  imageUrl?: string;
  commentCount: number;
  likeCount: number;
  liked: boolean;
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

export const writerInfoState = atom ({
  key: 'writerInfoState',
  default: {
    id: '',
    nickName:'',
    profileImageUrl:''
  }
})

export const commentState = atom({
  key: 'commentState',
  default: {
    id: '',
    dateOfWriting: '',
    content:''
  }
})

export const atkState = atom<string | null>({
  key: 'atk',
  default: null,
});

export const postingFormSelector = selector ({
  key: 'postingFormSelecotr',
  get: ({get}) => {
    const postingFormInfo ={
      category: get(postingFormState('category')),
      tags: get(postingFormState('tags')),
      title: get(postingFormState('title')),
      content: get(postingFormState('contents'))
    };
    return postingFormInfo;
  }
})

export const postingFormState = atomFamily<Element, string>({
  key: 'postingFormState',
  default: ''
})

// const editingFormSelector = selectorFamily({
//   key: 'editingFormSelector',
//   get: (id) => async () => {
//     const posts = await getPostList(id);
//     return posts;
//   }
// }

// export const communityListFamily = atomFamily({
//   key: 'communityListFamily'

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

// 게시물 좋아요 상태
export const likeState= atomFamily<Element,number>({
  key: 'likeState',
  default: ''
})

export const pickerOpenState = atom({
  key: 'pickerOpenState',
  default: false
})

export const communityItemState = atom({
  key: 'communityItem',
  default: {
      id: 1,
      title: '',
      category:'',
      tags: [],
      dateOfRegistration:'',
      content:'',
  }
})

export type communityItemSelectorType = {
  id: number,
  title: string,
  category:string,
  tags: string[],
  dateOfRegistration:string,
  content:string,
}

export const communityItemSelector= selector({
  key: 'communityItemSelector',
  get: ({get}) : communityItemSelectorType => {
    const {id, title, category, tags, dateOfRegistration, content}
  = get(communityItemState);

  return {id, title, category, tags, dateOfRegistration, content}
  }
})

export type DetailInfoType = {
  id: number,
  title: string,
  category: string,
  dateOfRegistration: string
}

export const ImageState = atom({
  key: 'ImageState',
  default : []
})

export type ImageArrStateType = {
  size: number;
  uri: string;
  type: string;
  name: string;
};

export const ImageArrState = atom<ImageArrStateType[]>({
  key: 'ImageArrState',
  default: [],
});