export type CommunityTabType = {
  share?: string;
  question?: string;
};

export type CommunityMainProps = {
  enterContenetDetail?: () => void;
};

export type ContentItemType = {
  id: number;
  title: string;
  dateOfRegistration: string;
  category?: string;
  writerNickname?: string;
  imageUrl?: string;
  commentCount: number;
  likeCount: number;
  liked: boolean;
  listType?: 'mainList' | 'profileList';
};

export type CommentNumber = {
  commentNum: number;
};
export type likeCount = {
  likeCount: number;
};
export type nextButtonProps = {
  onPress: () => void;
  text?: string;
  disable?: boolean;
};

export type likeBtnPropsType = {
  id: number;
  likeCount: number;
  liked: boolean;
  mainList?: string;
  listType: string;
};

export type Time = {
  time: string;
};
