import React, {ReactElement} from 'react'
import { View } from 'react-native';
import styles  from './styles';

// import components
import { CommunityDetailProps } from '@navigators/CommunityStack/types';
import { DetailInfo, DetailContents, DetailCommentsInput, CommentDetail } from '@components/CommunityDetail';

export default function CommunityDetailScreen({navigation}: CommunityDetailProps): ReactElement {

  return (
    <View style={styles.container}>
      <DetailInfo/>
      <DetailContents/>
      {/* 댓글이 달리는 부분 */}
      <CommentDetail/>
      {/* 댓글 입력 inputBox */}
      <DetailCommentsInput/>
    </View>
  );
}