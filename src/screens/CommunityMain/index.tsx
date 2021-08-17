import React, { ReactElement, useLayoutEffect} from 'react'
import { View , Text} from 'react-native';
import styles  from './styles';
import { CommunityMain } from '@components/CommunityMain';
import {
  CommunityPostingProps,
  CommunityDetailProps,
} from '@navigators/CommunityStack/types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useRecoilState, useSetRecoilState} from 'recoil';
import { atkState, isLoginState } from '@/src/recoil/CommunityStack';
import { NextButton } from '@/src/components/common';
import roundToNearestMinutes from 'date-fns/fp/roundToNearestMinutes/index';
import roundToNearestMinutesWithOptions from 'date-fns/fp/roundToNearestMinutesWithOptions/index.js';

const Tab = createMaterialTopTabNavigator();


export default function CommunityMainScreen({
  navigation,
}: CommunityPostingProps): ReactElement {

  const [token, setToken] = useRecoilState(atkState);
  console.log(token);
  const [isLogin, setIsLogin]= useRecoilState(isLoginState)

  // token 받아오기
  useEffect(() => {
    const getToken = async () => {
      try {
        const getTokenRequest = await AsyncStorage.getItem('atk');
        setToken(getTokenRequest);
        setIsLogin(true)
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);

  // header 글쓰기 버튼
  useLayoutEffect(() => {
    const addContent = () => navigation.navigate('CommunityPosting');

    navigation.setOptions({
      headerRight: () => <NextButton text="글쓰기" onPress={addContent} disable={!isLogin}/>,
    });
  }, []);

  return (
    <View style={styles.container}  > 
    <Tab.Navigator  
      tabBarOptions={{
        labelStyle: { fontSize: 18 }, 
        activeTintColor:'#50CAD2', 
        inactiveTintColor: '#6A6D70', 
        indicatorStyle: {borderColor: '#50CAD2', borderWidth: 1 } 
       }}  
    >
      <Tab.Screen 
        name="공유해요" 
        component={SharedContents}
        initialParams={{ share: 'SHARE' }}
      />
      <Tab.Screen 
        name="궁금해요"
        component={QuestionaryContents}
        initialParams={{ question: 'QUESTION' }}
       />
      </Tab.Navigator>
    </View>
  );
}

const SharedContents = ({ route }: any) => {
  const share = route.params.share;
  return <CommunityMain share={share} type="mainList" />;
};

const QuestionaryContents = ({ route }: any) => {
   const question = route.params.question
  // console.log('question')
  return (<CommunityMain question={question} />)
};