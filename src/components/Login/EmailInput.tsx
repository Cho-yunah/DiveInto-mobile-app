import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { EmailInputProps } from './types';
import styles from './styles';
import useTransitionColor from './useTransitionColor';

import CheckBox from '@react-native-community/checkbox';
import Entype from 'react-native-vector-icons/Entypo';
import { ActivityIndicator } from 'react-native-paper';

import { useRecoilState } from 'recoil';
import { emailState, isCheckedSaveEmailState } from '@recoil/LoginStack';
import AsyncStorage from '@react-native-community/async-storage';

export default function EmailInput({ requestCheckEmail }: EmailInputProps) {
  const [toggleCheckBox, setToggleCheckBox] = useRecoilState(
    isCheckedSaveEmailState,
  ); // true 이면 로그인시 asyncStorage에 이메일 저장.
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useRecoilState(emailState);
  const [isValid, setIsValid, interpolations] = useTransitionColor({
    screen: 'Login',
  });

  const TransitionPressable = Animated.createAnimatedComponent(Pressable);
  const TransitionText = Animated.createAnimatedComponent(Text);

  const onTextInput = (text: string) => {
    checkEmailValidation(text) ? setIsValid(true) : setIsValid(false);
  };

  useLayoutEffect(() => {
    const getSavedEmail = async () => {
      const savedEmail = await checkSavedEmail();
      console.log(savedEmail);

      if (!savedEmail) setToggleCheckBox(false);
      else {
        setToggleCheckBox(true);
        setEmail(savedEmail);
        onTextInput(savedEmail); // 로그인 버튼 활성화
      }
    };
    getSavedEmail();

    return () => {
      setEmail('');
    };
  }, []);

  return (
    <>
      <View style={styles.middleContainer}>
        <Pressable
          onPress={() => setToggleCheckBox(s => !s)}
          style={styles.button}
        >
          <CheckBox
            boxType="square"
            onCheckColor={'rgb(32,122,180)'}
            value={toggleCheckBox}
          />
          <Text
            style={[
              styles.checkBoxText,
              { color: toggleCheckBox ? 'rgb(32,122,180)' : '#c1c2c3' },
            ]}
          >
            이메일 저장
          </Text>
        </Pressable>
      </View>

      {/* 이메일 입력, 검증 */}
      <TextInput
        style={styles.emailInput}
        placeholder="이메일 주소를 입력해주세요"
        textContentType={'emailAddress'}
        onChangeText={e => {
          onTextInput(e);
          setEmail(e);
        }}
        spellCheck={false}
        value={email}
      />
      {isValid && (
        <Entype
          name={'check'}
          size={24}
          color={'#38D1A8'}
          style={styles.checkIcon}
        />
      )}

      {/* 이메일 형식 검증 */}
      {isValid !== undefined ? (
        <Text style={isValid ? styles.guideTextValid : styles.guideTextInvalid}>
          {isValid
            ? '올바른 형태의 이메일 주소입니다.'
            : '올바른 형태의 이메일 주소를 작성해주세요.'}
        </Text>
      ) : (
        <Text style={styles.guideTextInvalid}>{''}</Text>
      )}

      {/* 로그인 버튼 */}
      <TransitionPressable
        disabled={!isValid}
        style={[
          styles.transitionPressable,
          { backgroundColor: interpolations.backgroundColorInterpolation },
        ]}
        onPress={() => requestCheckEmail(email, setIsLoading)}
      >
        <TransitionText
          style={[
            styles.buttonText,
            { color: interpolations.colorInterpolation },
          ]}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fefefe" />
          ) : (
            '이메일로 시작'
          )}
        </TransitionText>
      </TransitionPressable>
    </>
  );
}

function checkEmailValidation(email: string): boolean {
  const regex =
    /^([a-zA-Z0-9\-._]+)@([a-zA-Z0-9-_]+).([a-z]{2,20})(.[a-z]{2,10})$/;
  return regex.test(email);
}

const checkSavedEmail = async () => {
  const email = await AsyncStorage.getItem('savedEmail');

  return email;
};
