import React, {ReactElement} from 'react'
import { View, Text } from 'react-native';
import styles  from './styles';

// import components
import { CommunityDetailProps } from '@/src/navigators/CommunityStack/types';
import { CommunityDetail } from '@/src/components/CommunityDetail';

export default function CommunityMainScreen({navigation}: CommunityDetailProps): ReactElement {

  return (
    <View style={styles.container}>
      <CommunityDetail />
    </View>
  );
}