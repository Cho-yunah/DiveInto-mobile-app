import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useRecoilState } from 'recoil';

import { genderBtnStyles as styles } from './styles';
import { gender, selectTabProps } from './types';
import { genderState } from '@/src/recoil/LoginStack';

function GenderBtn() {
  const [genderSelected, setGenderSelected] = useRecoilState(genderState);

  const onPress = (gender: gender) => setGenderSelected(gender);

  return (
    <View style={styles.genderTotalContainer}>
      <SelectTab gender="MALE" selected={genderSelected} onPress={onPress} />
      <SelectTab gender="FEMALE" selected={genderSelected} onPress={onPress} />
    </View>
  );
}

const SelectTab = ({
  selected,
  gender,
  onPress = () => {},
}: selectTabProps) => {
  const isSelect = gender === selected;

  const transitionLanguage = (gender: string) => {
    if (gender === 'MALE') return '남성';
    else return '여성';
  };

  return (
    <View style={[styles.genderBtn, isSelect && styles.active]}>
      <TouchableOpacity onPress={() => onPress(gender)} activeOpacity={0.7}>
        <Text style={[styles.genderBtnText, isSelect && styles.activeText]}>
          {transitionLanguage(gender)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderBtn;
