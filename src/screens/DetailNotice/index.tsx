import { DetailNoticeProps } from '@/src/navigators/ProfileStack/types';
import React from 'react';
import { View, Text } from 'react-native';

function index({ route }: DetailNoticeProps) {
  const { noticeId } = route.params;

  console.log(noticeId);

  return (
    <View>
      <Text>하이</Text>
    </View>
  );
}

export default index;
