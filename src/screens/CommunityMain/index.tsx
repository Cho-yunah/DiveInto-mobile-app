import React, {ReactElement} from 'react'
import { View, Text } from 'react-native';
import styles  from './styles';

// import components
import {CommunityMain, CommunityItem } from '@components/CommunityMain';
import { CommunityPostingProps } from '@/src/navigators/CommunityStack/types';
import  {AddContentButton}  from '@components/CommunityMain';

export default function CommunityMainScreen({navigation}: CommunityPostingProps): ReactElement {

  const onPress = () => navigation.navigate('CommunityPosting');

  navigation.setOptions({
    headerRight: () => <AddContentButton onPress={onPress} />
  })

  return (
    <View style={styles.container}>
      <CommunityMain />
    </View>
  );
}