import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type RootManagementLectureStack = {
  ReviewCollection: {
    id: number;
    title: string;
  };
};

export type RootManagementLectureStackProps = StackScreenProps<
  RootManagementLectureStack,
  'ReviewCollection'
>;
