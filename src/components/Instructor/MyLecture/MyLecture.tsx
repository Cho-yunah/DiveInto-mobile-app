import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { MyLectureStyle as styles, shadow } from './styles';
import { Organization, Level, Region } from '@typing/common';
import { InstructorMyLecture } from './types';

import TagList from '@components/MainList/Lecture/Tags';
import Price from './Price';
import MainImage from './MainImage';

import axios from 'axios';

export function MyLecture({
  id,
  title,
  organization,
  level,
  region,
  imageUrl,
  price,
  maxNumber,
  period,
  lectureTime,
  equipmentNames,
  leftScheduleDate,
  isClosed,
  onPress = () => {},
}: InstructorMyLecture) {
  return (
    <TouchableOpacity
      style={[shadow, { marginRight: 5 }]}
      activeOpacity={0.7}
      onPress={() => onPress(id)}
    >
      <View style={styles.lectureContainer}>
        <MainImage image={imageUrl} />

        {/* 강의 요약 정보 */}
        <View style={styles.infoContainer}>
          <TagList
            tags={[{ icon: 'Location', tagName: region }]}
            listContainerStyle={styles.tagList}
          />
          <TagList
            tags={[
              { tagName: title },
              { tagName: organization },
              { tagName: level },
            ]}
            listContainerStyle={styles.tagList}
            tagTextStyle={styles.titleTag}
            hideSeparator
          />

          <Price cost={price} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function MyLectureList({
  onPress = () => {},
}: {
  onPress?: (lectureId: number) => void;
}) {
  const [lectures, setLectures] = useState<InstructorMyLecture[]>();
  useLayoutEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios.get(
          'http://52.79.225.4:8081/lecture/manage/list?page=0&size=5',
        );

        const status = res.status;
        if (status !== 200) throw new Error('강사 내강의 조회 에러');
        setLectures(res.data._embedded.myLectureInfoList);
      };
      fetch();
    } catch (e) {
      console.log('강사 내강의 조회 에러');
    }
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 80 }}
    >
      {lectures &&
        lectures.map((lecture, idx) => (
          <MyLecture
            key={idx}
            id={lecture.id}
            title={lecture.title}
            organization={lecture.organization}
            level={lecture.level}
            region={lecture.region}
            maxNumber={lecture.maxNumber}
            lectureTime={lecture.lectureTime}
            equipmentNames={lecture.equipmentNames}
            imageUrl={lecture.imageUrl}
            price={lecture.price}
            period={lecture.period}
            leftScheduleDate={lecture.leftScheduleDate}
            isClosed={lecture.isClosed}
            onPress={onPress}
          />
        ))}
    </ScrollView>
  );
}
