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
};

export type CommunityLikeProps = {
  id: string;
  dateOfRegistration: string;
  category: string;
  title: string;
  likeCount: number;
  commentCount: number;
  writerNickname: string;
  imageUrl: string;
  liked: boolean;
};
