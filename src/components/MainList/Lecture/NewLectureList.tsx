import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NewLectures as styles, shadow } from './styles';
import { NewLectureProps } from './types';
import { useNavigation } from '@react-navigation/native';

import Heart from './Heart';
import InfoTags from './InfoTags';

const lectureExm = require('@assets/LectureExm.png');

import axios from 'axios';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const NewLecture = ({
  id,
  title = '프리다이빙',
  organization = 'AIDA',
  level = 'Level1',
  region = '서울',
  maxNumber,
  lectureTime,
  equipmentNames,
  imageUrl = '',
  isMarked,
  price,
}: NewLectureProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.lectureContainer, shadow]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('LectureDetail', { lectureId: id })}
    >
      {/* 강의이미지, 찜 아이콘 */}
      <Image
        source={imageUrl ? { uri: imageUrl } : lectureExm}
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
    </TouchableOpacity>
  );
};

const NewLectureSkeleton = () => (
  <>
    {Array.from({ length: 5 }, (v, i) => (
      <SkeletonPlaceholder>
        <View style={[styles.lectureContainer, shadow]}>
          <View style={styles.lectureImage} />
          <View style={styles.infoContainer} />
        </View>
      </SkeletonPlaceholder>
    ))}
  </>
);

export default function NewLectureList({
  onMorePress,
}: {
  onMorePress: () => void;
}) {
  const [lectures, setLectures] = useState<NewLectureProps[]>();
  useLayoutEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        'http://52.79.225.4:8081/lecture/new/list?page=0&size=10',
        {
          headers: {
            // IsRefreshToken: 'false',
            Authorization: null,
          },
        },
      );

      const status = res.status;
      if (status !== 200) throw new Error('신규강의 조회 에러');
      setLectures(res.data._embedded.newLectureInfoList);
    };

    fetch();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>새로운 강의</Text>
        <TouchableOpacity onPress={onMorePress}>
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {lectures ? (
          lectures.map(lecture => (
            <NewLecture
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
            />
          ))
        ) : (
          <NewLectureSkeleton />
        )}
      </ScrollView>
    </View>
  );
}
