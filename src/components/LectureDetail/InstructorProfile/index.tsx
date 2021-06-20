import { lectureInstructorProfileState } from '@/src/recoil/LectureStack';
import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { InstructorProfileStyles as styles } from './styles';

const InstructorProfile = () => {
  const { nickName, selfIntroduction, profilePhotoUrl } = useRecoilValue(
    lectureInstructorProfileState,
  );
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <Text style={styles.instructorInfoTitle}>강사 프로필</Text>
      <View style={styles.profileInfoContainer}>
        <Image
          source={{
            // uri: 'https://img.insight.co.kr/static/2021/01/10/700/img_20210110130830_kue82l80.webp',
            uri: profilePhotoUrl,
          }}
          style={styles.profilePic}
        />
        <View
          style={[styles.instructorInfoContainer, { width: windowWidth - 85 }]}
        >
          <Text style={styles.nickname}>{nickName}</Text>
          <Text style={styles.instructorBrief}>{selfIntroduction}</Text>
        </View>
      </View>
    </View>
  );
};

export default InstructorProfile;
