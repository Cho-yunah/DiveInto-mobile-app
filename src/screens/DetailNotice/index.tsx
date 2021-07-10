import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { findContentsProps } from './types';
import { detailContents } from '@assets/data/staticData';
import { DetailNoticeProps } from '@/src/navigators/ProfileStack/types';
import {
  Header,
  SubContents,
  EditContents,
  Appreciation,
} from '@components/DetailNotice';

function index({ route, navigation }: DetailNoticeProps) {
  const { noticeId, title, date } = route.params;

  navigation.setOptions({
    title,
  });

  const findContents: any = detailContents.find(({ id }: findContentsProps) => {
    return noticeId === id;
  });

  return (
    <View style={styles.bg}>
      <Header title={title} date={date} />
      <View style={styles.container}>
        <SubContents sub={findContents.subDesc} />
        <EditContents edit={findContents.changeDescList} />
        <Appreciation />
      </View>
    </View>
  );
}

export default index;
