import React, {ReactElement} from 'react'
import { ScrollView, View } from 'react-native';
import styles  from './styles';

// import components
import { CommunityDetailProps } from '@navigators/CommunityStack/types';
import { DetailInfo, DetailContents, DetailCommentsInput, CommentDetail } from '@components/CommunityDetail';

export default function CommunityDetailScreen({navigation}: CommunityDetailProps): ReactElement {

  return (
    <View style={styles.container}>
      <DetailInfo/>
        <ScrollView>
          <DetailContents/>
          <CommentDetail/>
        </ScrollView>
        <DetailCommentsInput/>
    </View>
  );
}