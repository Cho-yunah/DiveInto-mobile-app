import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Organization,
  Level,
  Region,
  CostCondition,
  ClassKind,
} from '@typing/common';

import CModal from '@legacy_cCommon/CModal';
import { EachFilter } from './EachFilter';

import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  FilterOrganization,
  FilterRegion,
  FilterLevel,
  FilterCostCondition,
} from '@recoil/LectureSearch';

const regionLabel: { label: Region; value: number }[] = [
  { label: '서울', value: 0 },
  { label: '경기', value: 1 },
  { label: '인천', value: 2 },
  { label: '부산', value: 3 },
  { label: '경상', value: 4 },
  { label: '대구', value: 5 },
  { label: '울산', value: 6 },
  { label: '대전', value: 7 },
  { label: '충청', value: 8 },
  { label: '강원', value: 9 },
  { label: '광주', value: 10 },
  { label: '전라', value: 11 },
  { label: '제주', value: 12 },
];

const certificateKindLabel: { label: Level; value: number }[] = [
  { label: 'level1', value: 0 },
  { label: 'level2', value: 1 },
  { label: 'level3', value: 2 },
  { label: 'level4', value: 3 },
];

const groupNameLabel: { label: Organization; value: number }[] = [
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
  const [organization, setOrganization] = useRecoilState(FilterOrganization);
  const [region, setRegion] = useRecoilState(FilterRegion);
  const [level, setLevel] = useRecoilState(FilterLevel);
  const [costCondition, setCostCondition] = useRecoilState(FilterCostCondition);

  return (
    <CModal
      modalClose={modalClose}
      modalVisible={modalVisible}
      title="필터 선택"
      animation="fadeInDown"
    >
      <>
        <Text style={styles.filterTitle}>지역선택</Text>
        {EachFilter({
          seletedNum: region.id,
          radioProps: regionLabel,
          onDateSelect: num => {
            const newValue = regionLabel.filter(rg => rg.value == num)[0].label;
            setRegion({ region: newValue, id: num });
            console.log(newValue);
          },
        })}

        <Text style={styles.filterTitle}>자격증 종류</Text>
        {EachFilter({
          seletedNum: level.id,
          radioProps: certificateKindLabel,
          onDateSelect: num => {
            const newValue = certificateKindLabel.filter(
              rg => rg.value == num,
            )[0].label;
            setLevel({ level: newValue, id: num });
            console.log(newValue);
          },
        })}

        <Text style={styles.filterTitle}>자격 단체</Text>
        {EachFilter({
          seletedNum: organization.id,
          radioProps: groupNameLabel,
          onDateSelect: num => {
            const newValue = groupNameLabel.filter(rg => rg.value == num)[0]
              .label;
            setOrganization({ organization: newValue, id: num });
            console.log(newValue);
          },
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
