import React, {ReactElement, useEffect, useLayoutEffect, useState} from 'react'
import { View } from 'react-native';
import styles  from './styles';
import { CommunityMainProps } from '@navigators/CommunityStack/types';
import  { SelectBox, TitleAndContents, AddImages}  from '@components/CommunityPosting';
import NextButton from '@components/common/NextButton';
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import instance from '@/src/lib/api/axios';
import { postingFormState } from '@/src/components/CommunityPosting/TitleAndContents';
import AsyncStorage from '@react-native-community/async-storage';
import { communityListState } from '@/src/recoil/CommunityStack';

export const atkState = atom<string | null>({
  key: 'atk',
  default: null,
});

export const postingFormSelector = selector ({
  key: 'postingFormSelecotr',
  get: ({get}) => {
    const postingFormInfo ={
      category: get(postingFormState('category')),
      tags: get(postingFormState('tag')),
      title: get(postingFormState('title')),
      content: get(postingFormState('contents'))
    };
    return postingFormInfo;
  }
})

export const postState = atom ({
  key: 'postState',
  default: []
})

export default function CommunityPostingScreen({navigation}: CommunityMainProps): ReactElement {
  const [isCompleted, setIsCompleted] = useState(false);
  const [token, setToken] = useRecoilState(atkState)
  // const [post, setPost] = useRecoilState(communityListState)
  const setCommunityList = useSetRecoilState(communityListState)

  // token 받아오기
  useEffect(()=> {
    const getToken = async() => {
    try{
      const getTokenRequest= await AsyncStorage.getItem('token');
      setToken(getTokenRequest)
    } catch (error) {
      console.log(error)
    }
  } 
  getToken()
},[])

  const config= { 
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  }
  const postingInfo = useRecoilValue(postingFormSelector) // data
  const allPostingFormFilled= Object.values(postingInfo).every(value => value) // 모든 posting filed가 시작되었는지 확인

  console.log('positingInfo: ', postingInfo)
  console.log('token',token)
  console.log(allPostingFormFilled)

  const onPress = async ()=> {
    setIsCompleted(allPostingFormFilled);
    try{
      const response = await instance.post('/community/post',postingInfo,config);
      const postingData= response.data.postResource
      console.log('response',response.data.postResource)
      setCommunityList((oldCommunityList) => [
        ...oldCommunityList,
        postingData
      ]);
      navigation.navigate('CommunityMain');
    } catch(e) {
      console.log(e)
    }
  };

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerRight: () => <NextButton text='완료' onPress={onPress}  disable={!isCompleted}/>
    })
  },[])

  return (
    <View style={styles.container}>
      <SelectBox />
      <TitleAndContents />
      <AddImages/>
    </View>
  )
}