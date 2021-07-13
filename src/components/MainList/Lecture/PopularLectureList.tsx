import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { PopularLectures as styles, shadow } from './styles';
import { PopularLectureProps } from './types';

import Heart from './Heart';
import InfoTags from './InfoTags';

const lectureExm = require('@assets/LectureExm.png');

export const PopularLecture = ({
  title = '프리다이빙',
  organization = 'AIDA',
  level = 'level1',
  region = '서울',
  maxNumber = 4,
  lectureTime = 8,
  equipmentNames = ['아쿠아슈즈', '잠수복'],
  image,
  reviewAvg = 4.5,
  reviewCount = 56,
}: PopularLectureProps) => {
  return (
    <View style={[shadow, { marginRight: 5 }]}>
      <View style={styles.lectureContainer}>
        {/* 이미지 */}
        <View style={styles.imageContainer}>
          <Image
            source={image ? { uri: image } : lectureExm}
            style={styles.image}
          />
        </View>

        {/* 강의 요약 정보 */}
        <View style={styles.infoContainer}>
          <InfoTags
            title={title}
            organization={organization}
            level={level}
            equipmentNames={equipmentNames}
            region={region}
            maxNumber={maxNumber}
            lectureTime={lectureTime}
            reviewAvg={reviewAvg}
            reviewCount={reviewCount}
            containerStyle={styles.tagContainer}
          />

          {/* 찜하기 버튼 */}
          <Heart containerStyle={styles.heart} />
        </View>
      </View>
    </View>
  );
};

export default function PopularLectureList() {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.title}>인기 강의</Text>
        <TouchableOpacity>
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      {/* 인기 강의 리스트 */}
      <ScrollView>
        <PopularLecture />
        <PopularLecture />
        <PopularLecture />
        <PopularLecture />
        <PopularLecture />
      </ScrollView>
    </View>
  );
}
