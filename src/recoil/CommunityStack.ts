import {atom, atomFamily, selector, selectorFamily} from 'recoil'

// 토큰 받기
export const atkState = atom<string | null>({
  key: 'atkState',
  default: null,
});
export type decodeTokenType = {
  exp: string,
  user_name: string,
}

// 커뮤니티 메인 리스트 
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

// 커뮤니티 포스팅
export const postingFormSelector = selector ({
  key: 'postingFormSelecotr',
  get: ({get}) => {
    const postingFormInfo ={
      category: get(postingFormState('category')),
      tags: [get(postingFormState('tags'))],
      title: get(postingFormState('title')),
      content: get(postingFormState('content'))
    };
    return postingFormInfo;
  }
})


export type PostingFormType = 'category' | 'tags' |'title' | 'content'

export const postingFormState = atomFamily<string, string>({
  key: 'postingFormState',
  default: ''
})

export type PostingItemType = {
  category: string,
  tags: string[],
  title: string,
  content: string
}
// export const postingIdState= atom ({
//   key: 'postingIdState',
//   default : 1
// })

export const likeState= atomFamily<Element,number>({
  key: 'likeState',
  default: false
})

export type likeBtnPropsType = {
  id: number,
  likeCount: number , 
  liked: boolean ,
  mainList ?: string
}

export const writerInfoState = atom ({ 
  key: 'writerInfoState',
  default: {
    id: '',
    nickName:'',
    profileImageUrl:''
  } 
})

export type writerInfoType = {
  id: string,
  nickName: string,
  profileImageUrl: string
}

// 커뮤니티 상세 페이지 
export const checkWriterState = atom({
  key: 'checkWriterState',
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
      liked: false,
      likeCount: 0
  }
})

export type communityItemSelectorType = {
  id: number,
  title: string,
  category:string,
  tags: string[],
  dateOfRegistration:string,
  content:string,
  liked: boolean,
  likeCount: number
}

export const communityItemSelector= selector({
  key: 'communityItemSelector',
  get: ({get}) : communityItemSelectorType => {
    const {id, title, category, tags, dateOfRegistration, content,liked, likeCount}
  = get(communityItemState);

  return {id, title, category, tags, dateOfRegistration, content, liked, likeCount}
  }
})

export type DetailInfoType = {
  id: number,
  title: string,
  category: string,
  dateOfRegistration: string
}

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

export const ImageState = atom({
  key: 'ImageState',
  default : []
})

// 상세 페이지 
export const showModalState = atom({
  key: 'showModalState',
  default: false
})
export const commentState = atom<commentListType[]>({
  key: 'commentState',
  default: []
})

export type commentListType = {
  accountModel: {
    id: number,
    nickName: '',
    profileImageUrl:  ''
  },
  commentModel:{
    id: number,
    dateOfWriting: '',
    content: ''
  }
}

export type commentItemType = {
  nickName: string,
  profileUrl: string,
  dateOfWriting: string,
  content: string,
  commentId: number,
  // editing: void
}

export const postIdState= atom({
  key: 'postIdState', 
  default: 1
})

export const commentTextState = atom({
  key: 'commentTextState',
  default: {
    content: ''
  }
})
export const commentRequestState = atom({
  key: 'commentRequestState',
  default: false
})

export const commentInputFocusState = atom({
  key: 'commentInputFocusState',
  default: false
})

export const commentIdState = atom({
  key: 'commentIdState',
  default: 0
})
export const commentInputButtonState= atom({
  key: 'commentInputButtonState',
  default: false
})
export const commentListPageState = atom({
  key: 'commentListPageState',
  default : 0
})
export const commentLoadingState = atom({
  key: 'commentLoadingState',
  default: false
})

export const isEditedState = atom({
  key: 'isEditedState',
  default : false
})

/// 대댓글///
export const writingRecommentState = atom({
  key: 'writingRecommentState',
  default: false
})

export const recommentTextState = atom({
  key: 'recommentTextState',
  default: {
    content:''
  }
})

export const recommentState = atom<recommentListType[]>({
  key: 'recommentState',
  default: []
})

export type recommentListType = {
  accountModel: {
    id: number,
    nickName: '',
    profileImageUrl:  ''
  },
  commentCommentModel:{
    id: number,
    dateOfWriting: '',
    content: ''
  }
}
export type recommentItemType = {
  nickName: string,
  profileUrl: string,
  dateOfWriting: string,
  content: string,
  recommentId: number,
}

export const recommentLoadingState = atom({
  key: 'recommentLoadingState',
  default: false
})

export const recommentListPageState= atom({
  key: 'recommentListPageState',
  default: 0
})

export const showRecommentState = atomFamily({
  key: 'showRecommentState',
  default: false
})