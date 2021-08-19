import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as color from '@config/colors';

import { selector, useRecoilState } from 'recoil';
import { SelectedFilterTag } from '@recoil/Instructor/AdmMyLecture';

type filterTagList = '등록순' | '최신강의순' | '낮은가격순' | '높은가격순';

export default function FilterTagList({
  filters,
}: {
  filters: filterTagList[];
}) {
  const [selectedTag, setSelectedTag] = useRecoilState(SelectedFilterTag);
  const onTagPress = (tag: filterTagList) => setSelectedTag(tag);
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      {filters.map((filter, i) => (
        <FilterTag
          text={filter}
          isSelect={selectedTag === filter}
          key={i}
          onPress={() => onTagPress(filter)}
        />
      ))}
    </View>
  );
}

const FilterTag = ({
  text,
  isSelect,
  onPress,
}: {
  text: string;
  isSelect: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
    style={[
      styles.tagContainer,
      isSelect ? styles.selectBackColor : styles.unselectBackColor,
      styles.shadow,
    ]}
  >
    <Text
      style={[
        styles.tagText,
        isSelect ? styles.selectTextColor : styles.unselectTextColor,
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tagContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 10,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 5,
  },
  selectBackColor: { backgroundColor: color.PointBlue },
  unselectBackColor: { backgroundColor: color.White },
  tagText: { fontWeight: '600' },
  selectTextColor: { color: color.White },
  unselectTextColor: { color: color.BlackText },
});
