
import { CommunityDetailProps } from '@navigators/CommunityStack/types';


export type CommunityMainProps = {
  enterContenetDetail: () => void
};

export type ContentItem = {
  title: string;
  postAuthor: string;
  postingDate: string;
  imageSrc: string;
  commentNum: number;
  // onItemClick: ()=> void;
  navigation: CommunityDetailProps;
  id: string;
}