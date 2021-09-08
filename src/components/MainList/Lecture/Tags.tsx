import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Tags as styles } from './styles';
import { TagProps, TagListProps } from './types';

import Location from '@assets/Location.svg';
import Person from '@assets/Person.svg';
import Time from '@assets/Time.svg';
import Plus from '@assets/Plus.svg';
import Separator from '@assets/Separator.svg';
import Star from '@assets/Star.svg';

/**
 *
 * @component Tag
 * @param {tagName} 태그명
 * @param {containerStyle} 태그 컨테이너 스타일
 */
export const Tag = ({ tagName, icon, containerStyle, textStyle }: TagProps) => {
  return (
    <View style={[styles.tagContainer, containerStyle]}>
      {/* 아이콘 없이 텍스트만 있을수도 있다 */}
      {icon === 'Location' && (
        <Location width={8} height={8} style={styles.icon} />
      )}
      {icon === 'Person' && <Person width={8} height={8} style={styles.icon} />}
      {icon === 'Time' && <Time width={8} height={8} style={styles.icon} />}
      {icon === 'Plus' && <Plus width={8} height={8} style={styles.icon} />}
      {icon === 'Star' && <Star width={8} height={8} style={styles.icon} />}

      {/* 텍스트는 반드시 있어야함 */}
      <Text style={[styles.tagText, textStyle]}>{tagName}</Text>
    </View>
  );
};

/**
 *
 * @component TagList
 * @param {tagNames} 태그명 배열
 * @param {containerStyle} 태그 컨테이너 스타일
 */
export default function TagList({
  tags,
  listContainerStyle,
  tagContainerStyle,
  tagTextStyle,
  hideSeparator,
}: TagListProps) {
  const tagList = tags.map(
    (tag, i) =>
      tag.tagName && (
        <View key={i} style={{ flexDirection: 'row' }}>
          <Tag
            tagName={tag.tagName}
            icon={tag.icon}
            containerStyle={tagContainerStyle}
            textStyle={tagTextStyle}
          />
          {hideSeparator ? (
            <View style={styles.separate}></View>
          ) : (
            i !== tags.length - 1 && <Separator style={styles.separate} />
          )}
        </View>
      ),
  );

  return (
    <View style={[styles.tagListContainer, listContainerStyle]}>{tagList}</View>
  );
}
