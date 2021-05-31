import instance from '@/src/lib/api/axios';
import { isLoadingState } from '@/src/recoil/LoginStack';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Entype from 'react-native-vector-icons/Entypo';
import { useRecoilState } from 'recoil';
import styles from './styles';
import useTransitionColor from './useTransitionColor';

export default function EmailInput() {
  const onTextInput = (text: string) =>
    checkEmailValidation(text) ? setIsValid(true) : setIsValid(false);
  const [isValid, setIsValid, interpolations] = useTransitionColor({
    screen: 'Login',
  });
  const TransitionPressable = Animated.createAnimatedComponent(Pressable);
  const TransitionText = Animated.createAnimatedComponent(Text);

  const [email, setEmail] = useState<string>('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const onCheckboxPress = () => setToggleCheckBox(!toggleCheckBox);
  const navigation = useNavigation();

  const requestCheckEmail = async (email: string) => {
    setIsLoading(true);
    try {
      const checkEmail = await instance.post('/sign/check/email', {
        email,
      });
      console.log(checkEmail.data);
      if (checkEmail.data.existed) navigation.navigate('LoginWithEmail');
      else navigation.navigate('MemberInfo');
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    onTextInput(email);
  }, [email]);

  return (
    <>
      <View style={styles.middleContainer}>
        {/* 이메일 저장 체크박스 */}
        <CheckBox
          title="Click Here"
          size={20}
          onIconPress={onCheckboxPress}
          containerStyle={styles.checkboxContainer}
          Component={TouchableOpacity}
          checked={toggleCheckBox}
          checkedColor={'rgb(32, 122, 180)'}
          onPress={() => setToggleCheckBox(s => !s)}
        />
        <Pressable onPress={onCheckboxPress} style={styles.button}>
          <Text style={styles.checkBoxText}>이메일 저장</Text>
        </Pressable>
      </View>

      {/* 이메일 입력, 검증 */}
      <TextInput
        style={styles.emailInput}
        placeholder="이메일 주소를 입력해주세요"
        textContentType={'emailAddress'}
        onChangeText={setEmail}
        spellCheck={false}
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
      {isValid !== undefined && email.length > 0 ? (
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
        onPress={() => requestCheckEmail(email)}
      >
        <TransitionText
          style={[
            styles.buttonText,
            { color: interpolations.colorInterpolation },
          ]}
        >
          {isLoading ? 'Loading...' : '이메일로 시작'}
        </TransitionText>
      </TransitionPressable>
    </>
  );
}

function checkEmailValidation(email: string): boolean {
  // const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const regex =
    /^([a-zA-Z0-9\-._]+)@([a-zA-Z0-9-_]+).([a-z]{2,20})(.[a-z]{2,10})$/;
  return regex.test(email);
}
