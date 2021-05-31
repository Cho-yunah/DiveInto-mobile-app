import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
export type fadeEffectProp = { current: { progress: any } };

export type RootMainTab = {
  홈: undefined;
  커뮤니티: undefined;
  강의일정: undefined;
  강의후기?: undefined;
  프로필: undefined;
};
export type HomeProps = StackScreenProps<RootMainTab, '홈'>;
export type CommunityProps = StackScreenProps<RootMainTab, '커뮤니티'>;
export type ReviewProps = StackScreenProps<RootMainTab, '강의후기'>;
export type ScheduleProps = StackScreenProps<RootMainTab, '강의일정'>;
export type ProfileProps = StackScreenProps<RootMainTab, '프로필'>;
