import { lectureCommonSelectorFamily } from '@/src/recoil/LectureStack';
import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { InstructorProfileStyles as styles } from './styles';

const InstructorProfile = () => {
  const instructorProfile = useRecoilValue(
    lectureCommonSelectorFamily('InstructorProfile'),
  );
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <Text style={styles.instructorInfoTitle}>강사 프로필</Text>

      <View style={styles.profileInfoContainer}>
        <Image
          source={{
            uri: instructorProfile?.profilePhotoUrl || '',
          }}
          style={styles.profilePic}
        />

        <View
          style={[styles.instructorInfoContainer, { width: windowWidth - 85 }]}
        >
          <Text style={styles.nickname}>
            {instructorProfile?.nickName || '닉네임이 없습니다.'}
          </Text>
          <Text style={styles.instructorBrief}>
            {instructorProfile?.selfIntroduction || '자기소개 내용이 없습니다.'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InstructorProfile;
