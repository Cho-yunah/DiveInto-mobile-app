import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import CModal from '@legacy_cCommon/CModal';
import { EachFilter } from './EachFilter';

const region = [
  { label: '서울', value: 0 },
  { label: '경기', value: 1 },
  { label: '인천', value: 2 },
  { label: '부산', value: 3 },
  { label: '경상, 대구, 울산', value: 4 },
  { label: '대전, 충청', value: 5 },
  { label: '강원', value: 6 },
  { label: '광주, 전라, 제주', value: 7 },
  { label: '온라인', value: 8 },
];

const certificateKind = [
  { label: 'level1', value: 0 },
  { label: 'level2', value: 1 },
  { label: 'level3', value: 2 },
  { label: 'level4', value: 3 },
];

const groupName = [
  { label: 'AIDA', value: 0 },
  { label: 'PADI', value: 1 },
  { label: 'SSI', value: 2 },
];

export function FilterModal({
  modalClose = () => {},
  modalVisible = false,
  onRegionSelect = () => {},
  onCertificateKindSelect = () => {},
  onGroupNameSelect = () => {},
  onFilterOk = () => {},
}) {
  return (
    <CModal
      modalClose={modalClose}
      modalVisible={modalVisible}
      title="필터 선택"
      animation="fadeInDown"
    >
      <>
        <Text style={styles.filterTitle}>지역선택</Text>
        {EachFilter({ radioProps: region, onDateSelect: onRegionSelect })}
        <Text style={styles.filterTitle}>자격증 종류</Text>
        {EachFilter({
          radioProps: certificateKind,
          onDateSelect: onCertificateKindSelect,
        })}
        <Text style={styles.filterTitle}>자격 단체</Text>
        {EachFilter({
          radioProps: groupName,
          onDateSelect: onGroupNameSelect,
        })}
      </>
      <TouchableOpacity style={styles.filterOkButton} onPress={onFilterOk}>
        <Text style={styles.filterOkButtonText}>확인</Text>
      </TouchableOpacity>
    </CModal>
  );
}

const styles = StyleSheet.create({
  rootContainer: { backgroundColor: 'white', flex: 1 },
  searchBarContainer: {
    width: '100%',
    // justifyContent: 'center',
    padding: 10,
    backgroundColor: '#00BCD4',
    flexDirection: 'row',
  },
  heightScroll: { height: '100%' },
  searchBar: {
    height: 40,
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#F5F8FD',
    padding: 10,
    marginRight: 7,
  },
  searchButton: {
    borderWidth: 1,
    backgroundColor: '#126881',
    borderRadius: 10,
    padding: 5,
  },
  saleContainer: {
    height: 280,
    borderWidth: 0,
    backgroundColor: '#F5F8FD',
  },
  saleTitle: {
    fontSize: 20,
    padding: 10,
  },
  listContainer: {
    borderWidth: 1,
    height: 60,
    width: '100%',
    backgroundColor: 'green',
    padding: 3,
  },
  filterTitle: {
    padding: 5,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 3,
  },
  filterOkButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    padding: 10,
    marginBottom: -10,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    backgroundColor: 'lightblue',
  },
  filterOkButtonText: { fontSize: 17 },
});
