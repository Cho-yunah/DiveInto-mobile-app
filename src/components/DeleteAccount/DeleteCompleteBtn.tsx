import { deleteUserConditionSelector } from '@/src/recoil/ProfileStack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useRecoilValue } from 'recoil';

import { deleteCompleteBtnStyle as styles } from './styles';
import { DeleteCompleteBtnType } from './types';

export default function DeleteCompleteBtn({
  onDeleteUser,
}: DeleteCompleteBtnType) {
  const isValid = useRecoilValue(deleteUserConditionSelector);

  return (
    <TouchableOpacity
      style={[styles.container, !isValid && styles.noneValidStyle]}
      onPress={onDeleteUser}
      disabled={!isValid}
    >
      <Text style={[styles.btnText, !isValid && styles.noneValidText]}>
        탈퇴 완료
      </Text>
    </TouchableOpacity>
  );
}
