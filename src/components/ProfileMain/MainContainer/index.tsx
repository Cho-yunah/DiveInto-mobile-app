import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { userInfoPorps } from './types';
import PhoneNumberInfo from './UserInfo/PhoneNumberInfo';
import EtcUserInfo from './UserInfo/EtcUserInfo';
import LectureList from './LectureList';
import NoticeList from './NoticeList';
import Output from './Output';

export default function MainContainer({
  email,
  nickname,
  phone,
}: userInfoPorps) {
  return (
    <ScrollView style={styles.rootContainer}>
      <PhoneNumberInfo phone={phone} />
      <EtcUserInfo nickname={nickname} email={email} />
      <LectureList />
      <NoticeList />
      <Output />
    </ScrollView>
  );
}
