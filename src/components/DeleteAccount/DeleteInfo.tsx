import React from 'react';
import { View, Text } from 'react-native';

import { deleteInfoStyle as styles } from './styles';

const DeleteInfoArr = [
  {
    id: 1,
    content:
      '회원 탈퇴 후 30일 동안 이용 기록이 보관되면 30일 후에는 모든 기록이 삭제됩니다.',
  },
  {
    id: 2,
    content:
      '비회원으로 퐁당 콘텐츠를 사용할 수 있지만, 일부 기능이 제한될 수 있습니다.',
  },
  {
    id: 3,
    content:
      '복구를 원하는 경우 기존에 가입한 ID로 로그인을 시도하면 복구를 진행할 수 있습니다.',
  },
];

export default function DeleteInfo() {
  return (
    <View style={styles.container}>
      {DeleteInfoArr.map((info, index) => (
        <Text style={styles.contentText} key={info.id}>
          {`${index + 1}. ${info.content}`}
        </Text>
      ))}
    </View>
  );
}
