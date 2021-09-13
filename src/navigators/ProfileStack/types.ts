import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type RootProfileStack = {
  ProfileMain: undefined;
  ModifyNum: undefined;
  ApplyLecturer: undefined;
  DetailNotice: {
    noticeId: number;
    title: string;
    date: string;
  };
  Policy: undefined;
  BusinessPolicy: undefined;
  ServicePolicy: undefined;
  FTPolicy: undefined;
  PrivacyPolicy: undefined;
  DetailPolicy: undefined;
  // ReviewCollection: {
  //   id: number;
  //   title: string;
  // };
  DetailFAQ: {
    FAQ_id: number;
    title: string;
    type: string;
  };
  DetailReservation: {
    reservationId: number;
    navigateToHome?: () => void;
  };
  WriteReview: {
    reservationId: number;
  };
};

//  공통 타입
export type ProfileMainProps = StackScreenProps<
  RootProfileStack,
  'ProfileMain'
>;

export type ModifyNumProps = StackScreenProps<RootProfileStack, 'ModifyNum'>;

export type DetailNoticeProps = StackScreenProps<
  RootProfileStack,
  'DetailNotice'
>;

export type DetailFAQProps = StackScreenProps<RootProfileStack, 'DetailFAQ'>;

export type PolicyProps = StackScreenProps<RootProfileStack, 'Policy'>;

export type BusinessPolicyProps = StackScreenProps<
  RootProfileStack,
  'BusinessPolicy'
>;

export type ServicePolicyProps = StackScreenProps<
  RootProfileStack,
  'ServicePolicy'
>;
export type FTPolicyPolicyProps = StackScreenProps<
  RootProfileStack,
  'FTPolicy'
>;
export type PrivacyPolicyProps = StackScreenProps<
  RootProfileStack,
  'PrivacyPolicy'
>;

// 수강생 타입
export type ApplyLecturerProps = StackScreenProps<
  RootProfileStack,
  'ApplyLecturer'
>;

// 강사 타입
// export type ReviewCollectionProps = StackScreenProps<
//   RootProfileStack,
//   'ReviewCollection'
// >;

// 후기작성 타입
export type WriteReviewProps = StackScreenProps<
  RootProfileStack,
  'WriteReview'
>;

// 예약한 강의 상세 타입
export type DetailReservationProps = StackScreenProps<
  RootProfileStack,
  'DetailReservation'
>;
