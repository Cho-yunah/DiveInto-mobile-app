import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

// route.params로 전달될 속성값들을 명시한다.
export type RootCommunityStack = {
  CommunityMain: undefined;
  CommunityPosting: {id: number};
  CommunityDetail: {id: number};
};

// 스크린 컴포넌트가 전달받을 navigation, route 프롭을 정의한다.
export type CommunityMainProps = {
  navigation: StackNavigationProp<RootCommunityStack, 'CommunityMain'>;
};
export type CommunityPostingProps = 
StackScreenProps<RootCommunityStack, 'CommunityPosting'>;

export type CommunityDetailProps =StackScreenProps<RootCommunityStack, 'CommunityDetail'>;
