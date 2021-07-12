import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';

import { Level } from '@typing/common';

import { useSetRecoilState } from 'recoil';
import { LevelSelect } from '@recoil/Instructor/AddLecture';

const Levels = ['Level1', 'Level2', 'Level3', 'Level4'];
export function LevelSelector({ zIndex }: { zIndex?: number }) {
  const setLevel = useSetRecoilState(LevelSelect);
  const label = Levels.map(level => ({ label: level, value: level }));
  return (
    <DropDownPicker
      onChangeValue={value => setLevel(value as Level)}
      placeholder="자격증 종류를 선택해주세요."
      items={label}
      zIndex={zIndex}
    />
  );
}
