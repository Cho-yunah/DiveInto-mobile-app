import React, {ReactElement} from 'react'
import { View } from 'react-native';
import styles  from './styles';

// import components
import { CommunityDetailProps } from '@navigators/CommunityStack/types';
import { DetailInfo, DetailContents, DetailComments } from '@components/CommunityDetail';

export default function CommunityDetailScreen({navigation}: CommunityDetailProps): ReactElement {

  return (
    <View style={styles.container}>
      <DetailInfo/>
      <DetailContents/>
      <DetailComments/>
    </View>
  );
}