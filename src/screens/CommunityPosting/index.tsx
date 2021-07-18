import React, {ReactElement, useLayoutEffect, useState} from 'react'
import { View } from 'react-native';
import styles  from './styles';
import { CommunityPostingProps } from '@navigators/CommunityStack/types';
import  { SelectBox, TitleAndContents, AddImages}  from '@components/CommunityPosting';
import NextButton from '@components/common/NextButton';
import {  useRecoilValue, useSetRecoilState } from 'recoil';
import instance from '@/src/lib/api/axios';
import { atkState, communityListState, postingFormSelector, postingFormState } from '@/src/recoil/CommunityStack';

export default function CommunityPostingScreen({route, navigation}: CommunityPostingProps): ReactElement {
  const token = useRecoilValue(atkState)
  const [isCompleted, setIsCompleted] = useState(false);
  const setCommunityList = useSetRecoilState(communityListState)
  const communityList = useRecoilValue(communityListState)

  // 수정버튼 눌러서 id 가 들어왔을때의 데이터 넣어주기
  let id
  if (route.params) {
    id = route.params.id
  }
  // console.log(id)

// 게시물 작성 후 완료 버튼 눌렀을 때의 로직
  const config= { 
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  }
  const postingInfo = useRecoilValue(postingFormSelector) // data
  const allPostingFormFilled= Object.values(postingInfo).every(value => value) // 모든 posting filed에 값이 있는지 확인

  // console.log('positingInfo: ', postingInfo)
  // console.log('token', token)

  // 게시물 완성
  const onComplete = async ()=> {
    setIsCompleted(allPostingFormFilled);
    try{
      const response = await instance.post('/community/post',postingInfo,config);
      const postingData= response.data.postResource
      // console.log('response',response.data.postResource)
      setCommunityList((oldCommunityList) => [
        ...oldCommunityList,
        postingData
      ]);
      navigation.navigate('CommunityMain');
    } catch(e) {
      console.log(e)
    }
  };

  // 글 수정 완료
  const editingComplete = async() => {
    setIsCompleted(allPostingFormFilled);
    console.log(postingInfo)
    try{
      const response = await instance.put('/community/post/${id}',postingInfo,config);
      const postingData= response.data.postResource
      // console.log('response',response.data.postResource)
      setCommunityList((oldCommunityList) => [
        ...oldCommunityList,
        postingData
      ]);
      navigation.navigate('CommunityMain');
    } catch(e) {
      console.log(e)
    }
  }

  // console.log('communityList-posting',communityList)

  useLayoutEffect(()=> {
    navigation.setOptions({
     headerRight: id
     ? () => <NextButton text='수정완료' onPress={editingComplete}  disable={!isCompleted}/>
     : () => <NextButton text='완료' onPress={onComplete}  disable={!isCompleted}/>
    }) // id 가 있으면 게시물 수정 로직, 없으면 업로드 로직
  },[])

  return (
   (<View style={styles.container}>
        <SelectBox id={id}/>
        <TitleAndContents id={id}/>
        <AddImages />
      </View>)
  )
}