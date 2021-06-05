import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { InstructorProfileStyles as styles } from './styles';

const InstructorProfile = () => {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <Text style={styles.instructorInfoTitle}>강사 프로필</Text>
      <View style={styles.profileInfoContainer}>
        <Image
          source={{
            uri: 'https://img.insight.co.kr/static/2021/01/10/700/img_20210110130830_kue82l80.webp',
          }}
          style={styles.profilePic}
        />
        <View
          style={[styles.instructorInfoContainer, { width: windowWidth - 85 }]}
        >
          <Text style={styles.nickname}>닉네임</Text>
          <Text style={styles.instructorBrief}>
            저는 사실 실력이 없는 강사입니다.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InstructorProfile;
