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
};

export type ProfileMainProps = StackScreenProps<
  RootProfileStack,
  'ProfileMain'
>;

export type ModifyNumProps = StackScreenProps<RootProfileStack, 'ModifyNum'>;

export type ApplyLecturerProps = StackScreenProps<
  RootProfileStack,
  'ApplyLecturer'
>;

export type DetailNoticeProps = StackScreenProps<
  RootProfileStack,
  'DetailNotice'
>;

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
