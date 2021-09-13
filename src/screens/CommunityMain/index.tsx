import React, { ReactElement, useLayoutEffect, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { CommunityMain } from '@components/CommunityMain';
import NextButton from '@components/CommunityMain/NextButton';
import { CommunityPostingProps } from '@navigators/CommunityStack/types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import { useRecoilState } from 'recoil';
import { atkState, isLoginState } from '@recoil/CommunityStack';

const Tab = createMaterialTopTabNavigator();

export default function CommunityMainScreen({
  navigation,
}: CommunityPostingProps): ReactElement {
  const [token, setToken] = useRecoilState(atkState);
  console.log(token);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  // token 받아오기
  useEffect(() => {
    const getToken = async () => {
      try {
        const getTokenRequest = await AsyncStorage.getItem('atk');
        setToken(getTokenRequest);
        setIsLogin(true);
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
      headerRight: () => (
        <NextButton text="글쓰기" onPress={addContent} disable={!isLogin} />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 18 },
          activeTintColor: '#50CAD2',
          inactiveTintColor: '#6A6D70',
          indicatorStyle: { borderColor: '#50CAD2', borderWidth: 1 },
        }}
      >
        <Tab.Screen name="공유해요" component={SharedContents} />
        <Tab.Screen name="궁금해요" component={QuestionContents} />
      </Tab.Navigator>
    </View>
  );
}

const SharedContents = () => {
  return <CommunityMain share={'SHARE'} />;
};

const QuestionContents = () => {
  return <CommunityMain question={'QUESTION'} />;
};
