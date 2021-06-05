import React, {ReactElement} from 'react'
import { View, Text } from 'react-native';
import styles  from './styles';

// import components
import { CommunityMainProps } from '@/src/navigators/CommunityStack/types';
import  {CommunityPosting, EditCompleteButton}  from '@components/CommunityPosting';

export default function CommunityPostingScreen({navigation}: CommunityMainProps): ReactElement {

  const onPress = () => navigation.navigate('CommunityMain');

  navigation.setOptions({
    headerRight: () => <EditCompleteButton onPress={onPress} />
  })

  return (
    <View style={styles.container}>
      <CommunityPosting/>
    </View>
  );
}