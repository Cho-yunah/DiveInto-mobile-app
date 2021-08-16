import { Organization, Level, Region } from '@typing/common';

export type LectureLikeStaticProps = {
  title: string;
  organization: Organization;
  level: Level;
  region: Region;
  maxNumber: number;
  lectureTime: number;
  equipmentNames: string[];
  imageUrl: string;
};

export type LectureLikeProps = LectureLikeStaticProps & {
  reviewAvg: number;
  reviewCount: number;
  id: number;
  isMarked: boolean;
};

export type CommunityLikeProps = {
  id: number;
  title: string;
  dateOfRegistration: string;
  category: string;
  writerNickname?: string;
  imageUrl?: string;
  commentCount: number;
  likeCount: number;
  liked: boolean;
  onItemClick: () => void;
};

export type CommunityLikeItemType = {
  id: number;
  title: string;
  dateOfRegistration: string;
  category: string;
  writerNickname: string;
  imageUrl?: string;
  commentCount: number;
  likeCount: number;
  liked: boolean;
};
