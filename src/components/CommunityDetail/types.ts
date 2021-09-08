export type ImageType = {
  id: number,
  imageUrl: string
}
export type CommentItemType = {
  nickName: string,
  profileUrl: string,
  dateOfWriting: string,
  content: string,
  commentId: number,
  commentWriterId: number
  // editing: void
}
export type decodeTokenType = {
  exp: string,
  user_name: string,
}
export type IdProps ={
  id ?: number,
  commentId ?: number,
  recommentId ?: number
}

export type CommentListType = {
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

export type RecommentListType = {
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

export type DetailInfoType = {
  id: number;
  title: string;
  category: string;
  dateOfRegistration: string;
};