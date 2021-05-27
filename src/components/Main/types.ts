import { ViewStyle, TextStyle } from 'react-native';

// 헤더
export type SearchBoxProps = { placeholder: string };
export type AlarmProps = { onPress: () => void; hasAlarm: boolean };
export type FilterProps = { onPress: () => void };

// 강의목록
export type Organization = 'AIDA' | 'PADI' | 'SSI';
export type Level = 'level1' | 'level2' | 'level3' | 'level4' | 'level5';

export type NewLectureProps = {
  title: string;
  organization: Organization;
  level: Level;
  region: string;
  maxNumber: number;
  lectureTime: number;
  equipmentNames: string[];
  image: string;
};

export type Icon = 'Location' | 'Person' | 'Time' | 'Plus';
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
};
