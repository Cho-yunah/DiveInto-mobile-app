import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';
import { Region } from '@typing/common';

import { useSetRecoilState } from 'recoil';
import { RegionSelect } from '@recoil/Instructor/AddLecture';

const Regions = [
  '서울',
  '경기',
  '인천',
  '부산',
  '경상',
  '대구',
  '울산',
  '대전',
  '충청',
  '강원',
  '광주',
  '전라',
  '제주',
];
export function RegionSelector({ zIndex }: { zIndex?: number }) {
  const setRegion = useSetRecoilState(RegionSelect);
  const label = Regions.map(region => ({ label: region, value: region }));
  return (
    <DropDownPicker
      onChangeValue={value => setRegion(value as Region)}
      placeholder="강의가 진행되는 지역을 선택해주세요."
      items={label}
      zIndex={zIndex}
    />
  );
}
