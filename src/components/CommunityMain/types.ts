export type ContentItem = {
  title: string;
  postAuthor: string;
  postingDate: string;
  imageSrc: string;
  commentNum: number;
  onItemClick: ()=>void;
  id: string;
}

export type CommentNumber = {
  commentNum: number
}

export type OnItemClick = {
  onItemClick: () => void
}