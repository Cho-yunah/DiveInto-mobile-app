import { sortByState, SortByType } from '@/src/recoil/LectureStack';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { SortBySelectorProps } from './types';
import { LectureReviewStyles as styles } from './styles';

const SortBySelector = ({
  sortByText,
  sortByTextKr,
  isDisabled,
}: SortBySelectorProps) => {
  const [sortBy, setSortBy] = useRecoilState<SortByType>(sortByState);

  return (
    <Pressable onPress={() => setSortBy(sortByText)} disabled={isDisabled}>
      <View
        style={[
          styles.shadowContainer,
          sortBy === sortByText
            ? styles.orderBySelectorBtnActive
            : styles.orderBySelectorBtn,
        ]}
      >
        <Text style={sortBy === sortByText ? { color: 'white' } : {}}>
          {sortByTextKr}
        </Text>
      </View>
    </Pressable>
  );
};
export default SortBySelector;
