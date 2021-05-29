import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NewLectures as styles, shadow } from './styles';
import { NewLectureProps } from './types';

import Heart from './Heart';
import InfoTags from './InfoTags';

const lectureExm = require('@assets/LectureExm.png');

const NewLecture = ({
  title = '프리다이빙',
  organization = 'AIDA',
  level = 'level1',
  region = '서울',
  maxNumber = 4,
  lectureTime = 8,
  equipmentNames = ['아쿠아슈즈', '잠수복'],
  image = '',
}: NewLectureProps) => {
  return (
    <View style={[styles.lectureContainer, shadow]}>
      {/* 강의이미지, 찜 아이콘 */}
      <Image
        source={image ? { uri: image } : lectureExm}
        style={styles.lectureImage}
      />
      <Heart containerStyle={styles.heart} />

      {/* 강의 정보 요약 */}
      <View style={styles.infoContainer}>
        <InfoTags
          title={title}
          organization={organization}
          level={level}
          equipmentNames={equipmentNames}
          region={region}
          maxNumber={maxNumber}
          lectureTime={lectureTime}
          containerStyle={styles.tagContainer}
        />
      </View>
    </View>
  );
};

export default function NewLectureList() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>새로운 강의</Text>
        <TouchableOpacity>
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <NewLecture />
        <NewLecture />
        <NewLecture />
      </ScrollView>
    </View>
  );
}
