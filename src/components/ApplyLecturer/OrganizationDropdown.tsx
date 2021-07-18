import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { selectbox as styles } from './styles';

export default function Temp({
  setGroup,
}: {
  setGroup: (item: string) => void;
}) {
  const [pickerOpen, setPickerOpen] = useState(false);

  const categoryItem = [
    { label: 'AIDA', value: 'AIDA' },
    { label: 'PADI', value: 'PADI' },
    { label: 'SSI', value: 'SSI' },
  ];

  return (
    <View style={{ zIndex: 200 }}>
      <DropDownPicker
        containerStyle={
          pickerOpen ? styles.shadowContainer : styles.selectContainer
        }
        placeholder={'카테고리를 선택해주세요'}
        placeholderStyle={{ color: '#D8D8D8' }}
        items={categoryItem}
        itemStyle={styles.itemStyle}
        style={styles.pickerStyle}
        dropDownStyle={styles.dropDown}
        labelStyle={styles.labelStyle}
        onOpen={() => setPickerOpen(true)}
        onClose={() => setPickerOpen(false)}
        onChangeItem={({ value }) => {
          setGroup(value);
        }}
      />
    </View>
  );
}
