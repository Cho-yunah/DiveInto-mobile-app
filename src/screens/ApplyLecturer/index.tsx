import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { HeaderContainer } from '@/src/components/ProfileMain';
import { CommonInput, UploadCertificate } from '@/src/components/ApplyLecturer';

export default function ApplyLecturerScreen() {
  return (
    <View style={styles.container}>
      <HeaderContainer currScreen="lecturer" buttonText="프로필사진추가" />
      <CommonInput placeholderText="강사소개글" topBlank />
      <CommonInput placeholderText="강사소속단체명" />
      <CommonInput placeholderText="강사번호" />
      <UploadCertificate />
    </View>
  );
}
