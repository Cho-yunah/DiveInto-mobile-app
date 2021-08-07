import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilState } from 'recoil';

import { commonButton as styles } from '../styles';
import { ShowOutputModalProps } from './types';
import CommonModal from '@components/common/CommonModal';
import {
  logoutModalOpenState,
  deleteModalOpenState,
} from '@recoil/ProfileStack';

export default function ShowOutpuModal({
  title,
  desc,
  onExecute,
}: ShowOutputModalProps) {
  const [show, setShow] =
    title === '로그아웃'
      ? useRecoilState(logoutModalOpenState)
      : useRecoilState(deleteModalOpenState);

  const toggleShowModal = () => {
    setShow(!show);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleShowModal}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{title}</Text>
        <AntDesign name="right" size={12} color={'#6A6D70'} />
      </TouchableOpacity>

      <CommonModal
        show={show}
        mode="output"
        desc={desc}
        toggleShowModal={toggleShowModal}
        onClickConfirm={onExecute}
      />
    </View>
  );
}
