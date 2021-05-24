import React, {ReactElement} from 'react'
import { View, Text } from 'react-native';
import styles  from './styles';

// import components
import CommunityList from '@components/Community';

export default function CommunityListScreen(): ReactElement {

  return (
    <View style={styles.container}>
      <CommunityList />
    </View>
  );
}