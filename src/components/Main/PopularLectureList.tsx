import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { PopularLectures as styles, shadow } from './styles';
import { TagList as TagListType } from './types';
import TagList from './Tags';
import { Selected, UnSelected } from '@config/colors';
import Heart from '@assets/Heart.svg';

type NewLectureProp = {
  title: string;
  organization: 'AIDA' | 'PADI' | 'SSI';
  level: 'level1' | 'level2' | 'level3' | 'level4' | 'level5';
  region: string;
  maxNumber: number;
  lectureTime: number;
  equipmentNames: string[];
  reviewAvg: number;
  reviewCount: number;
};

const PopularLecture = ({
  title = '프리다이빙',
  organization = 'AIDA',
  level = 'level1',
  region = '서울',
  maxNumber = 4,
  lectureTime = 8,
  equipmentNames = ['아쿠아슈즈', '잠수복'],
  reviewAvg = 4.5,
  reviewCount = 56,
}: NewLectureProp) => {
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

  const avgStar: TagListType = [
    { icon: 'Star', tagName: `${reviewAvg}점  (${reviewCount}건의 평가)` },
  ];

  return (
    <View style={[shadow, { marginRight: 5 }]}>
      <View style={styles.lectureContainer}>
        {/* 이미지 */}
        <View style={styles.imageContainer}>
          <Image
            source={require('@assets/LectureExm.png')}
            style={styles.image}
          />
        </View>

        {/* 강의 요약 정보 */}
        <View style={styles.infoContainer}>
          <View>
            {/* 타이틀 */}
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
            <View style={styles.tagContainer}>
              <TagList tags={avgStar} />
            </View>
          </View>

          {/* 찜하기 버튼 */}
          <View style={styles.heart}>
            <TouchableOpacity onPress={() => setHeart(!heart)}>
              <Heart
                width={20}
                height={20}
                style={heart ? { color: Selected } : { color: UnSelected }}
              />
            </TouchableOpacity>
          </View>
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
