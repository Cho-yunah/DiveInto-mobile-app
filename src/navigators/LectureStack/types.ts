import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type fadeEffectProp = { current: { progress: any } };

export type RootLectureStack = {
  MainList: undefined;
  LectureDetail: { lectureId: number };
};
export type MainListProps = StackScreenProps<RootLectureStack, 'MainList'>;

export type LectureDetailProps = StackScreenProps<
  RootLectureStack,
  'LectureDetail'
>;
