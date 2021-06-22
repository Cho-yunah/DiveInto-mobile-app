export type CommunityMainProps = {
  enterContenetDetail: () => void
};

export type ContentItem = {
  title: string;
  postAuthor: string;
  postingDate: string;
  imageSrc: string;
  commentNum: number;
  // navigation: object;
  // onItemClick: ()=> void;
  id: string;
}