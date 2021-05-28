import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Tags as styles } from './styles';
import { TagProps, TagListProps } from './types';
import * as colors from '@config/colors';

import Location from '@assets/Location.svg';
import Person from '@assets/Person.svg';
import Time from '@assets/Time.svg';
import Plus from '@assets/Plus.svg';
import Separator from '@assets/Separator.svg';
import Star from '@assets/Star.svg';

/**
 *
 * @component TagList
 * @param {tagName} 태그명
 * @param {containerStyle} 태그 컨테이너 스타일
 */
export const Tag = ({ tagName, icon, containerStyle, textStyle }: TagProps) => {
  return (
    <View style={[styles.tagContainer, containerStyle]}>
      {icon === 'Location' && (
        <Location width={8} height={8} style={styles.icon} />
      )}
      {icon === 'Person' && <Person width={8} height={8} style={styles.icon} />}
      {icon === 'Time' && <Time width={8} height={8} style={styles.icon} />}
      {icon === 'Plus' && <Plus width={8} height={8} style={styles.icon} />}
      {icon === 'Star' && <Star width={8} height={8} style={styles.icon} />}
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
}: TagListProps) {
  const tagList = tags.map((tag, i) => (
    <>
      <Tag
        tagName={tag.tagName}
        icon={tag.icon}
        key={i}
        containerStyle={tagContainerStyle}
        textStyle={tagTextStyle}
      />
      {i !== tags.length - 1 && <Separator style={styles.separate} />}
    </>
  ));

  return (
    <View style={[styles.tagListContainer, listContainerStyle]}>{tagList}</View>
  );
}
