import React from 'react'
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {SelectStyle as styles} from './styles'

export default function SelectCategory() {
  return (
    <View >
      <DropDownPicker
        containerStyle={styles.selectContainer}
        placeholder={'카테고리를 선택해주세요.'}
        items ={[
          {label: '공유해요', value: '공유해요', }, 
          {label: '궁금해요', value: '궁금해요'},
        ]}
        itemStyle={styles.itemStyle}
        style={styles.pickerStyle}
        dropDownStyle={styles.dropDown}
        labelStyle={styles.labelStyle}
        />
    </View>
  )
}