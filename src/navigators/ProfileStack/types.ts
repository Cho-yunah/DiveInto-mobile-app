import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type RootProfileStack = {
  ModifyNum: undefined;
  DetailNotice: { noticeId: number };
};

export type ModifyNumProps = StackScreenProps<RootProfileStack, 'ModifyNum'>;
export type DetailNoticeProps = StackScreenProps<
  RootProfileStack,
  'DetailNotice'
>;
