export type CommunityMainProps = {
  enterContenetDetail: () => void;
};

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

export type CommentNumber = {
  commentNum: number
}
export type likeCount = {
  likeCount: number
}
export type nextButtonProps = {
  onPress: () => void;
  text?: string;
  disable?: boolean;
};