import React, {ReactElement} from 'react'
import { ScrollView, View } from 'react-native';
import styles  from './styles';

import { CommunityDetailProps } from '@navigators/CommunityStack/types';
import { DetailInfo, DetailContents, DetailCommentsInput, CommentDetail,  } from '@components/CommunityDetail';
import { useRequestCommunityItem } from '@/src/components/CommunityDetail/useRequestCommunityItem';
import { useRecoilValue } from 'recoil';
import { communityItemSelector } from '@/src/recoil/CommunityStack';

export default function CommunityDetailScreen({route, navigation}: CommunityDetailProps): ReactElement {
  
  const {id} =route.params;
  useRequestCommunityItem(id)

  const {title, category, dateOfRegistration} = useRecoilValue(communityItemSelector)

  navigation.setOptions({
    title
  })

  return (
    <View style={styles.container}>
      <DetailInfo title={title} category={category} dateOfRegistration={dateOfRegistration} id={id}/>
        <ScrollView>
          <DetailContents/>
          <CommentDetail/>
        </ScrollView>
        <DetailCommentsInput/>
    </View>
  );
}