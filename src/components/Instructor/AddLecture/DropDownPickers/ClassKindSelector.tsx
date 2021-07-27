import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';
import { ClassKind } from '@typing/common';

import { useSetRecoilState } from 'recoil';
import { ClassKindSelect } from '@recoil/Instructor/AddLecture';

const ClassKindList = ['프리다이빙', '스쿠버다이빙'];
export function ClassKindSelector({ zIndex }: { zIndex?: number }) {
  const setKind = useSetRecoilState(ClassKindSelect);
  const label = ClassKindList.map(kind => ({ label: kind, value: kind }));
  return (
    <DropDownPicker
      onChangeValue={value => setKind(value as ClassKind)}
      placeholder="강의 종류를 선택해주세요."
      items={label}
      zIndex={zIndex}
    />
  );
}
