export type commentItemType = {
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