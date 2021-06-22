import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import PhoneNumberInfo from './UserInfo/PhoneNumberInfo';
import EtcUserInfo from './UserInfo/EtcUserInfo';
import LectureList from './LectureList';
import NoticeList from './NoticeList';
import Output from './Output';

type Data = {
  phone: string;
  email: string;
  nickname: string;
};

const mockupData: Data = {
  phone: '01011112222',
  email: 'pmj6516@naver.com',
  nickname: '퐁당퐁당',
};

export default function MainContainer() {
  return (
    <ScrollView style={styles.rootContainer}>
      <PhoneNumberInfo phone={mockupData.phone} />
      <EtcUserInfo nickname={mockupData.nickname} email={mockupData.email} />
      <LectureList />
      <NoticeList />
      <Output />
    </ScrollView>
  );
}
