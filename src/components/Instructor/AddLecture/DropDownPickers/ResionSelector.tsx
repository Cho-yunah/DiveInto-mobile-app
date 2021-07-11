import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';

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
export function ResionSelector({ zIndex }: { zIndex?: number }) {
  const [selected, setSelected] = useState();
  const label = Regions.map(region => ({ label: region, value: region }));
  return (
      <DropDownPicker
        onChangeValue={
          values => {}
          // values !== null &&
          // setSelected(
          //   (values as string[]).length !== 0
          //     ? parseInt((values as string[])[0])
          //     : undefined,
          // )
          // console.log('values : ', values)
        }
        placeholder="강의가 진행되는 지역을 선택해주세요."
        items={label}
        zIndex={zIndex}
      />
  );
}
