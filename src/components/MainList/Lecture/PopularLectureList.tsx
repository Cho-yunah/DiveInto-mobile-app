import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { PopularLectures as styles, shadow } from './styles';
import { PopularLectureProps } from './types';

import Heart from './Heart';
import InfoTags from './InfoTags';

const lectureExm = require('@assets/LectureExm.png');

import axios from 'axios';

const PopularLecture = ({
  id,
  title = '프리다이빙',
  organization = 'AIDA',
  level = 'level1',
  region = '서울',
  maxNumber = 4,
  lectureTime = 8,
  equipmentNames = ['아쿠아슈즈', '잠수복'],
  imageUrl,
  isMarked,
  price,
  starAvg = 0,
  reviewCount = 0,
}: PopularLectureProps) => {
  return (
    <View style={[shadow, { marginRight: 5 }]}>
      <View style={styles.lectureContainer}>
        {/* 이미지 */}
        <View style={styles.imageContainer}>
          <Image
            source={imageUrl ? { uri: imageUrl } : lectureExm}
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
            starAvg={starAvg}
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
  const [lectures, setLectures] = useState<PopularLectureProps[]>();
  useLayoutEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios.get(
          'http://52.79.225.4:8081/lecture/popular/list?page=0&size=5',
          {
            headers: {
              // IsRefreshToken: false,
              Authorization: null,
            },
          },
        );

        const status = res.status;
        if (status !== 200) throw new Error('인기강의 조회 에러');
        setLectures(res.data._embedded.lectureInfoList);
      };
      fetch();
    } catch (e) {
      console.log('인기강의 조회 에러');
    }
  }, []);

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
        {lectures &&
          lectures.map(lecture => (
            <PopularLecture
              id={lecture.id}
              title={lecture.title}
              organization={lecture.organization}
              level={lecture.level}
              region={lecture.region}
              maxNumber={lecture.maxNumber}
              lectureTime={lecture.lectureTime}
              equipmentNames={lecture.equipmentNames}
              imageUrl={lecture.imageUrl}
              isMarked={lecture.isMarked}
              price={lecture.price}
              period={lecture.period}
              starAvg={lecture.starAvg}
              reviewCount={lecture.reviewCount}
            />
          ))}
      </ScrollView>
    </View>
  );
}
