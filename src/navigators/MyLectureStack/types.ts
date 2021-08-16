import { StackScreenProps } from '@react-navigation/stack';

export type RootAdmMyLectureStack = {
  강의목록: undefined;
  강의등록: undefined;
  강의등록2: undefined;
  장비등록: undefined;
  위치등록: undefined;
  위치검색: {
    baseLocationChange: ({
      latitude,
      longitude,
    }: {
      latitude: number;
      longitude: number;
    }) => void;
  };
  강의정보관리: {
    lectureId: number;
  };
  강의수정: {
    lectureId: number;
  };
  일정추가: {
    lectureId: number;
  };
};
export type MyLectureListProps = StackScreenProps<
  RootAdmMyLectureStack,
  '강의목록'
>;
export type AddLectureProps = StackScreenProps<
  RootAdmMyLectureStack,
  '강의등록'
>;
export type AddLecture2Props = StackScreenProps<
  RootAdmMyLectureStack,
  '강의등록2'
>;
export type AddEquipProps = StackScreenProps<RootAdmMyLectureStack, '장비등록'>;

export type AddLocationProps = StackScreenProps<
  RootAdmMyLectureStack,
  '위치등록'
>;

export type NMapSearchProps = StackScreenProps<
  RootAdmMyLectureStack,
  '위치검색'
>;

export type ScheduleStackProps = StackScreenProps<
  RootAdmMyLectureStack,
  '강의정보관리'
>;
export type EditLectureProps = StackScreenProps<
  RootAdmMyLectureStack,
  '강의수정'
>;

export type AddScheduleProps = StackScreenProps<
  RootAdmMyLectureStack,
  '일정추가'
>;
