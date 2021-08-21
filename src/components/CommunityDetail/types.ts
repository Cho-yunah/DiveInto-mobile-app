export type CommentItemType = {
  nickName: string,
  profileUrl: string,
  dateOfWriting: string,
  content: string,
  commentId: number,
  // editing: void
}
export type decodeTokenType = {
  exp: string,
  user_name: string,
}
export type CommentIdProps ={
  commentId : number,
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