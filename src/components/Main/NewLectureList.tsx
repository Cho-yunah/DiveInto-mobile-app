import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NewLectures as styles, shadow } from './styles';
import { NewLectureProps } from './types';

import { Selected, UnSelected } from '@config/colors';
import { TagList as TagListType } from './types';

import TagList from './Tags';
import Heart from '@assets/Heart.svg';

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
  const [heart, setHeart] = useState(false);

  const tags: TagListType = equipmentNames.map((tag, i) => ({
    icon: i === 0 ? 'Plus' : undefined,
    tagName: tag,
  }));

  const tagList: TagListType = [
    { icon: 'Location', tagName: region },
    {
      icon: 'Person',
      tagName: maxNumber === 1 ? '1명' : `1~${maxNumber}명`,
    },
    { icon: 'Time', tagName: `${lectureTime}시간` },
  ];

  return (
    <View style={[styles.lectureContainer, shadow]}>
      {/* 강의이미지, 찜 아이콘 */}
      <Image source={lectureExm} style={styles.lectureImage} />
      <View style={styles.heart}>
        <TouchableOpacity onPress={() => setHeart(!heart)}>
          <Heart
            width={20}
            height={20}
            style={heart ? { color: Selected } : { color: UnSelected }}
          />
        </TouchableOpacity>
      </View>

      {/* 강의 정보 요약 */}
      <View style={styles.infoContainer}>
        <View style={styles.infoTitleContainer}>
          <Text style={[{ marginRight: 10 }, styles.infoTitleText]}>
            {title}
          </Text>
          <Text style={[{ marginRight: 5 }, styles.infoTitleText]}>
            {organization}
          </Text>
          <Text style={styles.infoTitleText}>{level}</Text>
        </View>

        {/* 강의 정보 태그 리스트 */}
        <View style={styles.tagContainer}>
          <TagList tags={tagList} />
        </View>
        <View style={styles.tagContainer}>
          <TagList tags={tags} />
        </View>
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
      <ScrollView horizontal>
        <NewLecture />
        <NewLecture />
        <NewLecture />
      </ScrollView>
    </View>
  );
}
