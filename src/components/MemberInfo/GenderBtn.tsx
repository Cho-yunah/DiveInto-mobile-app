import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { gender, selectTabProps } from './types';
import { genderBtnStyles as styles } from './styles';

function GenderBtn() {
  const [genderSelected, setGenderSelected] = useState<gender>('남성');

  const onPress = (gender: gender) => setGenderSelected(gender);

  return (
    <View style={styles.genderTotalContainer}>
      <SelectTab gender="남성" selected={genderSelected} onPress={onPress} />
      <SelectTab gender="여성" selected={genderSelected} onPress={onPress} />
    </View>
  );
}

const SelectTab = ({
  selected,
  gender,
  onPress = () => {},
}: selectTabProps) => {
  const isSelect = gender === selected;

  return (
    <View style={[styles.genderBtn, isSelect && styles.active]}>
      <TouchableOpacity onPress={() => onPress(gender)} activeOpacity={0.7}>
        <Text style={[styles.genderBtnText, isSelect && styles.activeText]}>
          {gender}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderBtn;
