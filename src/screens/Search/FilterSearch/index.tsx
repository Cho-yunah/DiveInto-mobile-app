import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as colors from '@config/colors';

import { useRecoilValue } from 'recoil';
import {
  FilterOrganization,
  FilterRegion,
  FilterLevel,
  FilterCostCondition,
} from '@recoil/LectureSearch';

import { FilterModal } from '@components/FilterSearch';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export function FilterSearch() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const organization = useRecoilValue(FilterOrganization);
  const region = useRecoilValue(FilterRegion);
  const level = useRecoilValue(FilterLevel);
  // const cost = useRecoilValue(FilterCostCondition);

  const onFilterIconPress = () => setIsModalVisible(true);

  const onModalClose = () => setIsModalVisible(false);

  return (
    <>
      <View style={{ marginTop: 10 }}>
        <View style={styles.filterSelector}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.filterButton}
            onPress={onFilterIconPress}
          >
            <Icons name="filter-menu" size={23} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>필터</Text>
          </TouchableOpacity>
          <View style={styles.filtersContainer}>
            {organization && (
              <Text style={styles.filterFont}>{organization.organization}</Text>
            )}
            {region && <Text style={styles.filterFont}>{region.region}</Text>}
            {level && <Text style={styles.filterFont}>{level.level}</Text>}
          </View>
        </View>
      </View>

      <FilterModal
        onFilterOk={() => {
          onModalClose();
        }}
        modalClose={onModalClose}
        modalVisible={isModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  filterSelector: {
    flexDirection: 'row',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    padding: 8,
    color: 'grey',
  },
  filterButton: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.deepBlue,
  },
  filterFont: {
    fontSize: 15,
    fontWeight: '500',
    borderRadius: 5,
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
});
