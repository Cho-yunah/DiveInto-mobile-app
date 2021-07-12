import React, {ReactElement, useCallback, useState} from 'react'
import { View } from 'react-native';
import styles  from './styles';
import { CommunityMainProps } from '@navigators/CommunityStack/types';
import  { SelectBox, TitleAndContents, AddImages}  from '@components/CommunityPosting';
import NextButton from '@components/common/NextButton'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { postingFormState } from '@/src/components/CommunityPosting/TitleAndContents';

const postingState = atom({
  key: 'postingState',
  default : []
})

export default function CommunityPostingScreen({navigation}: CommunityMainProps): ReactElement {
  // const setPost = useSetRecoilState(postingState);
  const [isCompleted, setIsCompleted] = useState(false);
  const categoryState = useRecoilValue(postingFormState('category'))
  const tagState = useRecoilValue(postingFormState('tag'))
  const titleState =useRecoilValue(postingFormState('title'))
  const contentsState =useRecoilValue(postingFormState('contents'))

  // console.log('category:',category)
  // console.log('tag:',tag)
  // console.log('title:',title)
  // console.log('contents:',contents)


  const URL = `http://52.78.56.229:8082/community/post`

  const posting = useCallback(async ()=> {
    if(categoryState||tagState||titleState||contentsState){
      setIsCompleted(true)
    } 

    try{
      const response = await axios.post(URL, {
        category:categoryState,
        tag:tagState,
        title:titleState,
        contents:contentsState
      });
      // setPost(response);
      console.log(response)
      // navigation.navigate('CommunityMain'));
    } catch(e) {
      console.log(e)
    }
  }, []);

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

// export const createUserSelector = selector({
//   key: 'sign/sign-up',
//   get: ({ get }) => {
//     const userInfo = {
//       email: get(emailState),
//       password: get(password),
//       nickName: get(nicknameState),
//       birth: moment(get(birthState)).format('YYYY-MM-DD'),
//       gender: get(genderState),
//       phoneNumber: get(phoneNumber),
//       verifyCode: get(verifyCodeState),
//     };

//     return userInfo;
//   },
// });