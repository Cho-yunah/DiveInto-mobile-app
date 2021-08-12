import {
  GuideText,
  AuthenticationCodeArea,
  NewPasswordArea,
  ChangePwBtn,
} from '@/src/components/ForgotPassword';
import { ForgotPasswordProps } from '@/src/navigators/LoginStack/types';
import { isAlertedState, isAuthenticatedState } from '@/src/recoil/LoginStack';
import React, { useLayoutEffect } from 'react';
import { Pressable, Text, View, Modal, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ForgotPasswordScreenStyle as styles } from './style';

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordProps) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ChangePwBtn />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* 제일 큰 글씨, 본인인증을 위하여 이메일이 필요합니다 */}
        {/* 아래 이메일 주소로 인증번호가 발송됩니다. */}
        <GuideText />

        {/* 이메일 주소 + 인증번호 받기 버튼 & 인증번호 입력 + 인증하기 버튼 */}
        <AuthenticationCodeArea />

        {/* 새 비밀번호 + 새 비밀번호 확인 버튼 */}
        {isAuthenticated && <NewPasswordArea />}
        <AlertModal navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const AlertModal = ({
  navigation,
}: {
  navigation: ForgotPasswordProps['navigation'];
}) => {
  const [isAlerted, setIsAlertedState] = useRecoilState(isAlertedState);

  if (!isAlerted) return null;

  return (
    <Modal visible={!!isAlerted} transparent={true} animationType={'fade'}>
      <Pressable
        onPress={() => {
          if (isAlerted === '비밀번호가 성공적으로 변경되었습니다.') {
            setIsAlertedState('');
            navigation.goBack();
            return;
          }
          setIsAlertedState('');
        }}
        style={styles.modalOuterContainer}
      >
        <SafeAreaView style={styles.modalContainer}>
          <Text style={styles.modalText}>{isAlerted}</Text>
        </SafeAreaView>
      </Pressable>
    </Modal>
  );
};

export default ForgotPasswordScreen;
