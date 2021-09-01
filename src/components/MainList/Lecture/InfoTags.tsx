import React from 'react';
import { View, Text } from 'react-native';
import { InfoTags as styles } from './styles';
import { TagList as TagListType, InfoTagsProps } from './types';

import TagList from './Tags';
export default function InfoTags({
  title,
  organization,
  level,
  equipmentNames,
  region,
  maxNumber,
  lectureTime,
  starAvg,
  reviewCount,
  containerStyle,
}: InfoTagsProps) {
  console.log('startAvg : ', starAvg, reviewCount);
  const equipTags: TagListType = equipmentNames.map((tag, i) => ({
    icon: i === 0 ? 'Plus' : undefined,
    tagName: tag,
  }));

  const infoTags: TagListType = [
    { icon: 'Location', tagName: region },
    {
      icon: 'Person',
      tagName: maxNumber === 1 ? '1명' : `1~${maxNumber}명`,
    },
    { icon: 'Time', tagName: `${lectureTime}` },
  ];

  const avgStarTag: TagListType | undefined =
    starAvg !== undefined
      ? [{ icon: 'Star', tagName: `${starAvg}점  (${reviewCount}건의 평가)` }]
      : undefined;

  return (
    <View>
      {/* 제목, 자격단체, 자격증레벨 */}
      <View style={containerStyle}>
        <Text style={[{ marginRight: 10 }, styles.titleText]}>{title}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <Text style={[{ marginRight: 5 }, styles.subText]}>{organization}</Text>
        <Text style={styles.subText}>{level}</Text>
      </View>

      {/* 지역, 인원, 소요시간 */}
      <View style={containerStyle}>
        <TagList tags={infoTags} />
      </View>

      {/* 대여장비 목록 */}
      <View style={containerStyle}>
        <TagList tags={equipTags} />
      </View>

      {/* 평점, 리뷰개수 */}
      {starAvg !== undefined && (
        <View style={containerStyle}>
          <TagList tags={avgStarTag!} />
        </View>
      )}
    </View>
  );
}
