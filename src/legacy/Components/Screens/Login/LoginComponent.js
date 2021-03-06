import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Logo from '@legacy_pLogin/Logo';
import InputEmail from '@legacy_pLogin/InputEmail';
import InputPwd from '@legacy_pLogin/InputPwd';
import Buttons from '@legacy_pLogin/Buttons';

export default function LoginComponents({
  navigation,
  data,
  textInputChange,
  handlePasswordChange,
  updateSecureTextEntry,
  btnLogin,
  btnSignup,
}) {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.inputContainer}>
        {/* 이메일 입력란 */}
        <InputEmail data={data} textInputChange={textInputChange} />

        {/* 패스워드 입력란 */}
        <InputPwd
          data={data}
          handlePasswordChange={handlePasswordChange}
          updateSecureTextEntry={updateSecureTextEntry}
        />

        {/* 버튼 */}
        <Buttons
          navigation={navigation}
          data={data}
          btnLogin={btnLogin}
          btnSignup={btnSignup}
        />
      </View>

      <Button title="skip" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    padding: 30,
  },
});
