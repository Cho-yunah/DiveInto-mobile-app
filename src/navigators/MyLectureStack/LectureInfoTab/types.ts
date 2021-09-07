import { StackScreenProps } from '@react-navigation/stack';

export type RootAdmMyLectureStack = {
  강의일정: {
    lectureId: number;
  };
  강의정보: {
    lectureId: number;
  };
};

export type AllScheduleProps = StackScreenProps<
  RootAdmMyLectureStack,
  '강의일정'
>;

export type LectureInfoProps = StackScreenProps<
  RootAdmMyLectureStack,
  '강의정보'
>;
