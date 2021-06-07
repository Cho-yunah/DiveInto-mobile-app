import React from 'react'
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {SelectStyle as styles} from './styles'

export default function SelectTag() {
  return (
    <View >
      <DropDownPicker
        containerStyle={styles.selectContainer}
        placeholder={'태그를 선택해주세요.'}
        items ={[
          {label: '태그 1', value: '태그1', }, 
          {label: '태그 2', value: '태그 2'},
        ]}
        itemStyle={styles.itemStyle}
        style={styles.pickerStyle}
        dropDownStyle={styles.dropDown}
        labelStyle={styles.labelStyle}
        />
    </View>
  )
}