import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { HeaderStyles as styles, shadow } from './styles';
import { FilterProps } from './types';

import { FilterModal } from '@components/FilterSearch';

export default function Filter({ onPress }: FilterProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFilterSearchPress = () => setIsModalVisible(true);
  const onModalClose = () => setIsModalVisible(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.filterButton, shadow]}
        onPress={onFilterSearchPress}
      >
        <Text style={styles.filterText}>필터검색</Text>
      </TouchableOpacity>
      <FilterModal
        onFilterOk={() => {
          onModalClose();
          onPress();
        }}
        modalClose={onModalClose}
        modalVisible={isModalVisible}
      />
    </>
  );
}
