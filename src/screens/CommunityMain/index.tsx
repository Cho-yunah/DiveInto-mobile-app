import React, { ReactElement, useLayoutEffect} from 'react'
import { View , Text} from 'react-native';
import styles  from './styles';
import {CommunityMain } from '@components/CommunityMain';
import {QuestionaryContentsList } from '@components/CommunityMain';
import NextButton from '@components/CommunityMain/NextButton'
import { CommunityPostingProps, CommunityDetailProps } from '@navigators/CommunityStack/types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { atkState, postingFormState } from '@/src/recoil/CommunityStack';

const Tab= createMaterialTopTabNavigator();

export default function CommunityMainScreen({navigation}: CommunityPostingProps): ReactElement {

  const [token, setToken] = useRecoilState(atkState)
  console.log(token)

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
 
  // header 글쓰기 버튼  
  useLayoutEffect(()=> {
    const addContent = () => navigation.navigate('CommunityPosting')
    
    navigation.setOptions({
      headerRight: () => <NextButton text='글쓰기' onPress={addContent} />
    })
  },[])

  return (
    <View style={styles.container}  > 
    <Tab.Navigator  
      tabBarOptions={{
        labelStyle: { fontSize: 18 }, 
        activeTintColor:'#50CAD2', 
        inactiveTintColor: '#6A6D70', 
        indicatorStyle: {borderColor: '#50CAD2', borderWidth: 1} }}  
    >
      <Tab.Screen 
        name="공유해요" 
        component={SharedContents}
        initialParams={{share: 'share'}}
      />
      <Tab.Screen 
        name="궁금해요"
        component={QuestionaryContents}
        initialParams={{question: 'question'}}
        />
    </Tab.Navigator>
    </View>
  );
}

const SharedContents = ({route}: any) => {
  const share = route.params.share;
  return (<CommunityMain share={share} /> )
}

const QuestionaryContents = ({route}: any) => {
  const question = route.params.question
  // return (<CommunityMain question={question} />)
return (<>
  <Text>not yet</Text>
</>
)}
