import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';

const Levels = ['Level1', 'Level2', 'Level3', 'Level4'];
export function LevelSelector({ zIndex }: { zIndex?: number }) {
  const [selected, setSelected] = useState();
  const label = Levels.map(level => ({ label: level, value: level }));
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
        placeholder="자격증 종류를 선택해주세요."
        items={label}
        zIndex={zIndex}
      />
  );
}
