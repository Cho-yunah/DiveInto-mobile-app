// import { Organization, Level } from '@/src/types/common';
import { ViewStyle, TextStyle } from 'react-native';
import { Organization, Level, Region } from '@typing/common';

// 강의목록
export type NewLectureProps = {
  id: number;
  title: string;
  organization: Organization;
  level: Level;
  region: Region;
  maxNumber: number;
  period: number;
  lectureTime: number;
  equipmentNames: string[];
  imageUrl: string;
  isMarked: boolean;
  price: number;
};
export type PopularLectureProps = NewLectureProps & {
  starAvg: number;
  reviewCount: number;
};

export type Icon = 'Location' | 'Person' | 'Time' | 'Plus' | 'Star';
export type Tag = { icon?: Icon; tagName: string };
export type TagList = Tag[];

export type TagProps = {
  tagName: Tag['tagName'];
  icon: Tag['icon'];
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};
export type TagListProps = {
  tags: TagList;
  listContainerStyle?: ViewStyle;
  tagContainerStyle?: ViewStyle;
  tagTextStyle?: TextStyle;
  hideSeparator?: boolean;
};

export type InfoTagsProps = {
  title: string;
  organization: Organization;
  level: Level;
  equipmentNames: string[];
  region: Region;
  maxNumber: number;
  lectureTime: number;
  starAvg?: number;
  reviewCount?: number;
  containerStyle: ViewStyle;
};

export type HeartProps = {
  containerStyle?: ViewStyle;
  isMarked?: boolean;
};
