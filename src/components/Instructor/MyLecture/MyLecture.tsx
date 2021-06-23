import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { MyLectureStyle as styles, shadow } from './styles';
import { Organization, Level, Region } from '@typing/common';

import TagList from '@components/MainList/Lecture/Tags';
import Cost from './Cost';
import MainImage from './MainImage';

export function MyLecture({
  title = '프리다이빙',
  organization = 'AIDA',
  level = 'level1',
  region = '서울',
  image,
  cost = 120000,
}: {
  title: string;
  organization: Organization;
  level: Level;
  region: Region;
  image: string;
  cost: number;
}) {
  return (
    <TouchableOpacity style={[shadow, { marginRight: 5 }]} activeOpacity={0.7}>
      <View style={styles.lectureContainer}>
        <MainImage image={image} />

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

          <Cost cost={cost} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function MyLectureList() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 80 }}
    >
      <MyLecture />
      <MyLecture />
      <MyLecture />
      <MyLecture />
      <MyLecture />
      <MyLecture />
      <MyLecture />
    </ScrollView>
  );
}
