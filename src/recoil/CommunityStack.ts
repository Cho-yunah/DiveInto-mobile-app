import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  DefaultValue,
} from 'recoil';
// 토큰 받기
export const atkState = atom<string | null>({
  key: 'atkState',
  default: null,
});

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
};

export const allCommunityListState = selector({
  key: 'allCommunityListState',
  get: ({ get }) => {
    const list = get(communityListState);
    return list;
  },
});
export const loadingState = atom<boolean>({
  key: 'lodingState',
  default: false,
});

export const listPageState = atom<number>({
  key: 'listPageState',
  default: 0,
});

export const refreshState = atom<boolean>({
  key: 'refreshState',
  default: false,
});

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
  category: string;
  tags: string[];
  title: string;
  content: string;
};
// export const postingIdState= atom ({
//   key: 'postingIdState',
//   default : 1
// })

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

// 커뮤니티 상세 페이지
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

// 상세 페이지
export const commentState = atom<commentListType[]>({
  key: 'commentState',
  default: [],
});

export type commentListType = {
  accountModel: {
    id: number;
    nickName: '';
    profileImageUrl: '';
  };
  commentModel: {
    id: number;
    dateOfWriting: '';
    content: '';
  };
};

export type commentItemType = {
  nickName: string;
  profileUrl: string;
  dateOfWriting: string;
  content: string;
  commentId: number;
};

export const postIdState = atom({
  key: 'postIdState',
  default: 1,
});

export const commentTextState = atom({
  key: 'commentTextState',
  default: {
    content: '',
  },
});

export const CommentTextSelector = selector({
  key: 'CommentTextSelector',
  get: ({ get }) => {
    const { content } = get(commentTextState);

    return { content };
  },
});

export const showModalState = atom({
  key: 'showModalState',
  default: false,
});
