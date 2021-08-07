import React, { useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { DropDownPicker } from '@components/common';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

import { deleteReasonStyle as styles } from './styles';
import {
  deleteReasonState,
  deleteReasonStateType,
  etcDeleteReasonState,
} from '@/src/recoil/ProfileStack';

const Reason = [
  '원하는 정보가 존재하지 않아서',
  '사용하기 불편해서',
  '현재 사용하지 않는 앱이라서',
];

export default function DeleteReason() {
  const [etcReason, setEtcReason] = useRecoilState(etcDeleteReasonState);
  const resetText = useResetRecoilState(etcDeleteReasonState);
  const setReasonOptions = useSetRecoilState(deleteReasonState);
  const label = Reason.map(cause => ({ label: cause, value: cause }));

  const writeEtcReason = (text: string) => {
    setEtcReason(text);
  };

  useEffect(() => {
    resetText();
  }, []);

  return (
    <View style={styles.container}>
      <DropDownPicker
        items={label}
        placeholder="탈퇴 사유를 선택해주세요."
        onChangeValue={value =>
          setReasonOptions(value as deleteReasonStateType)
        }
        type="none"
      />

      <TextInput
        style={styles.etcReasonInput}
        value={etcReason}
        onChangeText={writeEtcReason}
        placeholder="기타 사유가 있다면 입력해주세요."
        placeholderTextColor={'#929292'}
      />
    </View>
  );
}
