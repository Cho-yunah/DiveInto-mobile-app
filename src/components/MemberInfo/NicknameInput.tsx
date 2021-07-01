import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';

import { inputStyles as styles } from './styles';
import { placeholder } from '@/src/config/colors';
import instance from '@lib/api/axios';
import ErrorText from '@components/MemberInfo/ErrorText';
import CommonModal from '@components/common/CommonModal';

function NicknameInput() {
  const [nickname, setNickname] = useState('');
  const [OverlapError, setOverlapError] = useState(false);
  const [validNickname, setValidNickname] = useState(true);
  const [show, setShow] = useState(false);

  const onChange = (text: string) => {
    checkNicknameValidation(text) || !text.length
      ? setValidNickname(true)
      : setValidNickname(false);

    setNickname(text);
  };

  const toggleShowModal = (): void => {
    setShow(!show);
  };

  const onClickConfirm = (): void => {
    setShow(false);
  };

  const onPress = async () => {
    try {
      setOverlapError(false);

      await instance.get(`/sign/check/nickName?nickName=${nickname}`);

      setShow(state => !state);
    } catch (e) {
      setOverlapError(true);
      // console.error(e);
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.commonText]}
          placeholder="닉네임"
          placeholderTextColor={placeholder}
          onChangeText={onChange}
          value={nickname}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>중복검사</Text>
        </TouchableOpacity>
      </View>
      <ErrorText isError={OverlapError} />

      <CommonModal
        show={show}
        desc="사용가능한 닉네임입니다. 해당 닉네임을 사용하시겠습니까?"
        onClickConfirm={onClickConfirm}
        toggleShowModal={toggleShowModal}
      />
    </>
  );
}

function checkNicknameValidation(nickname: string): boolean {
  const regex = /^[\w가-힣]{2,6}$/;

  return regex.test(nickname);
}

export default NicknameInput;
