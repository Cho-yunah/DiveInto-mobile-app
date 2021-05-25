import React, {ReactElement} from 'react'
import { View, Text } from 'react-native';
import styles  from './styles';

// import components
import {CommunityMain, CommunityItem } from '@components/CommunityMain';
import { CommunityMainProps } from '@/src/navigators/CommunityStack/types';
import  {AddContentButton}  from '@components/CommunityMain';

export default function CommunityMainScreen({navigation}: CommunityMainProps): ReactElement {

  const onPress = () => navigation.navigate('CommunityMain');

  navigation.setOptions({
    headerRight: () => <AddContentButton onPress={onPress} />
  })

  return (
    <View style={styles.container}>
      <CommunityMain />
      {/* <CommunityItem title={'title'}
              postAuthor={'postAuthor'}
              postingDate={'postingDate'}
              imageSrc={'imageSrc'} /> */}
    </View>
  );
}