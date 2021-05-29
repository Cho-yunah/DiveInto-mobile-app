import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type fadeEffectProp = { current: { progress: any } };

export type RootLectureStack = {
  MainList: undefined;
};
export type MainListProps = StackScreenProps<RootLectureStack, 'MainList'>;
