import React, { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';

import { styles } from './styles';
import { userInfoPorps } from './types';
import PhoneNumberInfo from './UserInfo/PhoneNumberInfo';
import EtcUserInfo from './UserInfo/EtcUserInfo';
import StudentLectureList from './LectureList/StudentLectureList';
import NoticeList from './NoticeList';
import Output from './Output';
import InstructorLectureList from './LectureList/InstructorLectureList';

export default function MainContainer({
  email,
  nickname,
  phone,
  type,
}: userInfoPorps) {
  if (type === 'instructor')
    return (
      <ScrollView style={styles.rootContainer}>
        <PhoneNumberInfo phone={phone} />
        <EtcUserInfo nickname={nickname} email={email} />
        <InstructorLectureList />
        <NoticeList />
        <Output />
      </ScrollView>
    );
  else
    return (
      <ScrollView style={styles.rootContainer}>
        <PhoneNumberInfo phone={phone} />
        <EtcUserInfo nickname={nickname} email={email} />
        <StudentLectureList />
        <NoticeList />
        <Output />
      </ScrollView>
    );
}
