import React,{Suspense} from 'react'
import { atom, selector, useRecoilValue } from "recoil";
import { View, Text, Image} from 'react-native';

import axios, { AxiosResponse } from 'axios';

// const sharedContentsListState = atom({
//   key: "sharedContentsList",
//   default: []
// })

// function contentsList() {
//   const contentItem = useRecoilValue(sharedContentsListState);
//   if (!contentItem) return <View><Text>게시물이 존재하지 않습니다.</Text></View>

// }

const getContent = selector({
  key: 'getContent',
  get: async({get})=> {
    const response = await axios.get('http://52.78.56.229:8082/community/post/1')
    
    return response
  }
})

const CurrentContentInfo =()=> {
  const contentItem = useRecoilValue(getContent)
  return <View>
      <Text>not yet</Text>
    </View>
}

export default function QuestionaryContentsList() {
  return (
      <Suspense fallback={<Text>Loading...</Text>}>
        <CurrentContentInfo/>
      </Suspense>
  )
}