import React, {ReactElement} from 'react'
import { View } from 'react-native';
import styles  from './styles';

// import components
import { CommunityMainProps } from '@navigators/CommunityStack/types';
import  { EditCompleteButton, SelectCategory, SelectTag, TitleAndContents, AddImages}  from '@components/CommunityPosting';
import NextButton from '@components/common/NextButton'


export default function CommunityPostingScreen({navigation}: CommunityMainProps): ReactElement {

  const onPress = () => navigation.navigate('CommunityMain');

  navigation.setOptions({
    headerRight: () => <NextButton text='완료' onPress={onPress} />
  })

  return (
    <View style={styles.container}>
      <SelectCategory/>
      <SelectTag/>
      <TitleAndContents/>
      <AddImages/>
    </View>
  )
}