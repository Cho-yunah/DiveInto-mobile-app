import React, {ReactElement, useCallback, useState} from 'react'
import { View } from 'react-native';
import styles  from './styles';
import { CommunityMainProps } from '@navigators/CommunityStack/types';
import  { SelectBox, TitleAndContents, AddImages}  from '@components/CommunityPosting';
import NextButton from '@components/common/NextButton'
import { atom, useSetRecoilState } from 'recoil';
import axios from 'axios';

const postingState = atom({
  key: 'postingState',
  default : []
})

export default function CommunityPostingScreen({navigation}: CommunityMainProps): ReactElement {
  const setPost = useSetRecoilState(postingState);
  const [isCompleted, setIsCompleted] = useState(false);

  const URL = `http://52.78.56.229:8082/community/post`

  const posting = useCallback(async ()=> {
    setIsCompleted(true)
    try{
      const response = await axios.post(URL, );
      // setPost(response);
      console.log(response)
      // navigation.navigate('CommunityMain'));
    } catch(e) {
      console.log(e)
    }
  }, [setPost]);

  // const onPress = () => (
  //   navigation.navigate('CommunityMain'));

  navigation.setOptions({
    headerRight: () => <NextButton text='완료' onPress={posting} disable={!isCompleted}/>
  })

  return (
    <View style={styles.container}>
      <SelectBox />
      <TitleAndContents/>
      <AddImages/>
    </View>
  )
}