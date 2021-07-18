import React, {ReactElement} from 'react'
import { ScrollView, View } from 'react-native';
import styles  from './styles';

import { CommunityDetailProps } from '@navigators/CommunityStack/types';
import { DetailInfo, DetailContents, CommentsInput, CommentDetail,  } from '@components/CommunityDetail';
import { useRequestCommunityItem } from '@/src/components/CommunityDetail/useRequestCommunityItem';
import { useRecoilValue } from 'recoil';
import { communityItemSelector } from '@/src/recoil/CommunityStack';

export default function CommunityDetailScreen({route, navigation}: CommunityDetailProps): ReactElement {
  
  const {id} =route.params;
  useRequestCommunityItem(id)

  const {title, content} = useRecoilValue(communityItemSelector)

  // navigation.setOptions({
  //   title
  // })

  return (
    <View style={styles.container}>
      <DetailInfo  id={id}/>
        <ScrollView>
          <DetailContents content={content}/>
          <CommentDetail/>
        </ScrollView>
        <CommentsInput/>
    </View>
  );
}