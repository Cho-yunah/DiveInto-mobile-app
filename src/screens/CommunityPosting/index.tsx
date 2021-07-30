import React, {ReactElement, useLayoutEffect, useState} from 'react'
import { ScrollView, View } from 'react-native';
import styles  from './styles';
import { CommunityPostingProps } from '@navigators/CommunityStack/types';
import  { SelectBox, TitleAndContents, AddImages}  from '@components/CommunityPosting';
import NextButton from '@components/common/NextButton';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { communityListState, ImageArrState, postingFormSelector, postingFormState } from '@/src/recoil/CommunityStack';
import { getFormData, requestPostCommunity } from '@components/CommunityPosting/requestPostCommunityImages';
import instance from '@/src/lib/api/axios';

export default function CommunityPostingScreen({route, navigation}: CommunityPostingProps): ReactElement {
  const [isCompleted, setIsCompleted] = useState(false);
  const setCommunityList = useSetRecoilState(communityListState)
  const imagesArr = useRecoilValue(ImageArrState)

  // 수정버튼 눌러서 id 가 들어왔을때의 데이터 넣어주기
  let id;
  if (route.params) {
    id = route.params.id
  }

  // 게시물 작성 후 완료 버튼 눌렀을 때의 로직
  const postingInfo = useRecoilValue(postingFormSelector) 
  console.log(postingInfo) 

  const allPostingFormFilled= Object.values(postingInfo).every(value => value) // 모든 posting filed에 값이 있는지 확인
  
  // 게시물 작성완료 후 업로드
  const onComplete = async ()=> {
    setIsCompleted(allPostingFormFilled)
    
    try{
      const body= postingInfo
      const postingData = await requestPostCommunity(body)
      const postingId = postingData.id

      if (typeof postingId === 'number' && imagesArr.length) {
        console.log('catch!')
        const imageRes = await requestPostCommunity
          (getFormData(imagesArr), postingId); 
        console.log(imageRes);
        console.warn('게시글 작성 완료');
      }
      setCommunityList((oldCommunityList) => [
        ...oldCommunityList,
        postingData
      ]); 
      navigation.navigate('CommunityMain');
      useSetRecoilState(postingFormState(''))
    } catch(e) {
      console.log(e)
    }
  };

 // 글 수정 완료
  const editingComplete = async() => {
    setIsCompleted(allPostingFormFilled);
    try{
      const response = await instance.put(`/community/post/${id}`,);
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

  useLayoutEffect(()=> {
    navigation.setOptions({
     headerRight: id
     ? () => <NextButton text='수정완료' onPress={editingComplete}  disable={!isCompleted}/>
     : () => <NextButton text='완료' onPress={onComplete}  disable={!isCompleted}/>
    }) // id 가 있으면 게시물 수정 로직, 없으면 업로드 로직
  },[isCompleted, postingInfo])

  return (
   <ScrollView style={styles.container}>
      <View style={styles.contentsAll}>
        <SelectBox id={id}/>
        <TitleAndContents id={id}/>
        <AddImages />
      </View>
  </ScrollView>
  )
}