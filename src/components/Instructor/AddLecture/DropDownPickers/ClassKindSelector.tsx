import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';

const ClassKind = ['프리다이빙', '스쿠버다이빙'];
export function ClassKindSelector({ zIndex }: { zIndex?: number }) {
  const [selected, setSelected] = useState();
  const label = ClassKind.map(kind => ({ label: kind, value: kind }));
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
        placeholder="강의 종류를 선택해주세요."
        items={label}
        zIndex={zIndex}
      />
  );
}
