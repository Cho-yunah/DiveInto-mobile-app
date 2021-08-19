import React, {ReactElement, useLayoutEffect, useState} from 'react'
import { ScrollView, View } from 'react-native';
import styles  from './styles';
import { CommunityPostingProps } from '@navigators/CommunityStack/types';
import  { SelectBox, TitleAndContents, AddImages}  from '@components/CommunityPosting';
import NextButton from '@components/common/NextButton';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ImageArrState, isEditedState, postingFormSelector, refreshQuestionState, refreshShareState } from '@/src/recoil/CommunityStack';
import { getFormData, requestEditCommunity, requestPostCommunity } from '@components/CommunityPosting/requestPostCommunityImages';

export default function CommunityPostingScreen({route, navigation}: CommunityPostingProps): ReactElement {
  const [isCompleted, setIsCompleted] = useState(false);
  const [imagesArr,setImagesArr] = useRecoilState(ImageArrState)
  const setEditRequestSuccess = useSetRecoilState(isEditedState)
  const setRefreshShare = useSetRecoilState(refreshShareState)
  const setRefreshQuestion = useSetRecoilState(refreshQuestionState)
  


  // 수정버튼 눌러서 id 가 들어왔을때의 데이터 넣어주기
  let id;
  if (route.params) {
    id = route.params.id
  }
  const postingInfo = useRecoilValue(postingFormSelector) 

  const allPostingFormFilled= Object.values(postingInfo).every(value => value) // 모든 posting filed에 값이 있는지 확인
  
  // 게시물 작성완료 후 업로드
  const onComplete = async ()=> {
    setIsCompleted(allPostingFormFilled)
    
    try{
      const body= postingInfo
      const postingData = await requestPostCommunity(body)
      const postingId = postingData.id

      if (typeof postingId === 'number' && imagesArr.length) {
        const imageRes = await requestPostCommunity
          (getFormData(imagesArr), postingId); 
      }
      setRefreshShare(false)
      setRefreshQuestion(false)
      navigation.navigate('CommunityMain');
    } catch(e) {
      console.log(e)
    }
  };

 // 글 수정 완료
  const editingComplete = async() => {
    setIsCompleted(allPostingFormFilled);

    try{
      const body= postingInfo
      const editingData = await requestEditCommunity(body, id) // 수정 요청
      // 수정되었을때 수정되었다는 알림 모달 띄우기 & 스켈레톤
      setEditRequestSuccess(true)
      setRefreshShare(false)
      setRefreshQuestion(false)
      navigation.navigate('CommunityDetail',{id});
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
    setImagesArr([])
  },[isCompleted, postingInfo])

  return (
   <ScrollView style={styles.container}>
      <View style={styles.contentsAll}>
        <SelectBox id={id}/>
        <TitleAndContents id={id}/>
        {id? <View></View> : <AddImages id={id} />}
      </View>
  </ScrollView>
  )
}