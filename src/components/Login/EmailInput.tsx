import { emailState, isLoadingState } from '@recoil/LoginStack';
import React, { useState } from 'react';
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
import { EmailInputProps } from './types';

export default function EmailInput({ requestCheckEmail }: EmailInputProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const [email, setEmail] = useRecoilState(emailState);
  const [isValid, setIsValid, interpolations] = useTransitionColor({
    screen: 'Login',
  });

  const TransitionPressable = Animated.createAnimatedComponent(Pressable);
  const TransitionText = Animated.createAnimatedComponent(Text);

  const onTextInput = (text: string) => {
    checkEmailValidation(text) ? setIsValid(true) : setIsValid(false);
  };
  const onCheckboxPress = () => setToggleCheckBox(!toggleCheckBox);

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
          {isLoading ? 'Loading...' : '이메일로 시작'}
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
