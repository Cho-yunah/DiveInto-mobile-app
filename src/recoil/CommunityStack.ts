import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  DefaultValue,
} from 'recoil';
import { CommentListType } from '../components/CommunityDetail/types';

// 토큰 받기
export type decodeTokenType = {
  exp: string,
  user_name: string,
}
export const atkState = atom<string | null>({
  key: 'atkState',
  default: null,
});

export const isLoginState = atom({
  key: 'isLoginState',
  default: false
})

// 커뮤니티 리스트 
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

export const shareLoadingState = atom<boolean>({
  key: 'shareLoadingState',
  default : false
})
export const questionLoadingState = atom<boolean>({
  key: 'questionLoadingState',
  default : false
})

export const shareListState = atom<ContentItem[]>({
  key: 'shareListState',
  default: []
})
export const questionListState = atom<ContentItem[]>({
  key: 'questionListState',
  default : []
})

export const shareListPageState = atom<number>({
  key: 'listPageState',
  default : 0
})
export const questionListPageState = atom<number>({
  key: 'questionListPageState',
  default : 0
})

export const refreshShareState = atom<boolean>({
  key: 'refreshShareState',
  default : false
})
export const refreshQuestionState = atom<boolean>({
  key: 'refreshQuestionState',
  default : false
})


// 커뮤니티 포스팅
export const postingFormSelector = selector({
  key: 'postingFormSelecotr',
  get: ({ get }) => {
    const postingFormInfo = {
      category: get(postingFormState('category')),
      tags: [get(postingFormState('tags'))],
      title: get(postingFormState('title')),
      content: get(postingFormState('content')),
    };
    return postingFormInfo;
  },
});

export type PostingFormType = 'category' | 'tags' | 'title' | 'content';

export const postingFormState = atomFamily<string, string>({
  key: 'postingFormState',
  default: '',
});

export type PostingItemType = {
  category: string,
  tags: string[],
  title: string,
  content: string
}

// 좋아요 on/off state
export const likeState = atomFamily<Element, number>({
  key: 'likeState',
  default: false,
});

export const communityListState = atom<ContentItem[]>({
  key: 'communityListState',
  default: [],
});


export const likedListState = atom<ContentItem[]>({
  key: 'likedListState',
  default: [],
});

// 좋아요 on/off state에 변경에 따른 리렌더링 상태

// export const setDeleteLikedSelector = selectorFamily({
//   key: 'setDeleteLiked',
//   get: () => () => {},
//   set:
//     (id: number) =>
//     ({ set, get }) => {
//       get(likedListState);
//       const removelikeList = get(communityListState).filter(info => {
//         if (info.liked && info.id !== id) return info;
//       });

//       set(likedListState, removelikeList);
//     },
// });

// export const setAddLikedSelector = selectorFamily({
//   key: 'setAddLiked',
//   get: () => () => {},
//   set:
//     (id: number) =>
//     ({ set, get }) => {
//       const totalList = get(communityListState);
//       const likedList = totalList.filter(info => info.liked);
//       const like = get(likeState(id));
//       const newAddItem = totalList.find(info => info.id === id);

//       // 새로운 커뮤니티 item 추가에 필요한 조건
//       if (like && likedList.includes(newAddItem!)) {
//         likedList.push(newAddItem!);
//       }

//       set(likedListState, likedList);
//     },
// });

export type likeBtnPropsType = {
  id: number;
  likeCount: number;
  liked: boolean;
  listType?: 'mainList' | 'profileList';
};

export const writerInfoState = atom({
  key: 'writerInfoState',
  default: {
    id: '',
    nickName: '',
    profileImageUrl: '',
  },
});

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
    category: '',
    tags: [],
    dateOfRegistration: '',
    content: '',
    liked: false,
    likeCount: 0,
  },
});

export type communityItemSelectorType = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  dateOfRegistration: string;
  content: string;
  liked: boolean;
  likeCount: number;
};

export const communityItemSelector = selector({
  key: 'communityItemSelector',
  get: ({ get }): communityItemSelectorType => {
    const {
      id,
      title,
      category,
      tags,
      dateOfRegistration,
      content,
      liked,
      likeCount,
    } = get(communityItemState);

    return {
      id,
      title,
      category,
      tags,
      dateOfRegistration,
      content,
      liked,
      likeCount,
    };
  },
});

// export const communityDetailState = atomFamily<string, string>({
//   key: 'postingFormState',
//   default: 
// })

export type DetailInfoType = {
  id: number;
  title: string;
  category: string;
  dateOfRegistration: string;
};

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
  default: [],
});

export const commentState = atom<CommentListType[]>({
  key: 'commentState',
  default: [],
});

export const commentIdSelector = selector({
  key: 'commentIdSelector',
  get: ({get}) => {
    const commentList = get(commentState);

    if(!commentList.length) return [];
    const commentIdSelector= commentList.map(commentItem => {
      return commentItem.accountModel.id
    })
    return commentIdSelector
  }
})


// export const postIdState= atom({
//   key: 'postIdState', 
//   default: 1
// })

export const commentTextState = atom({
  key: 'commentTextState',
  default: {
    content: '',
  },
});

export const showModalState = atom({
  key: 'showModalState',
  default: false,
});

export const commentRequestState = atom({
  key: 'commentRequestState',
  default: false,
});

export const commentInputFocusState = atom({
  key: 'commentInputFocusState',
  default: false,
});

export const commentIdState = atom({
  key: 'commentIdState',
  default: 0,
});

export const commentInputButtonState = atom({
  key: 'commentInputButtonState',
  default: false
})
export const checkCommentWriter= atomFamily({
  key: 'checkRecommentWriter',
  default: false
})

export const commentListPageState = atom({
  key: 'commentListPageState',
  default: 0,
});
export const commentLoadingState = atom({
  key: 'commentLoadingState',
  default: false,
});

export const isEditedState = atom({
  key: 'isEditedState',
  default: false,
});

/// 대댓글///
export const writingRecommentState = atom({
  key: 'writingRecommentState',
  default: false,
});

export const recommentTextState = atom({
  key: 'recommentTextState',
  default: {
    content: '',
  },
});

export const recommentState = atomFamily({
  key: 'recommentState',
  default: [],
});

export type recommentItemType = {
  nickName: string;
  profileUrl: string;
  dateOfWriting: string;
  content: string;
  recommentId: number;
  commentId: number
};

export const recommentLoadingState = atom({
  key: 'recommentLoadingState',
  default: false,
});

export const recommentListPageState = atom({
  key: 'recommentListPageState',
  default: 0,
});

export const showRecommentState = atomFamily({
  key: 'showRecommentState',
  default: false
})

export const recommentRequestState= atom({
  key: 'recommentRequestState',
  default: false
})

export const checkRecommentWriter= atom({
  key: 'checkRecommentWriter',
  default: false
})

