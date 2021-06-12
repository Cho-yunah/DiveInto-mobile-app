import React, { useState } from 'react'
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {SelectStyle as styles} from './styles'

export default function SelectBox({name}) {
  const [open, setOpen]= useState(false)

    return (
    <View style={name==='category'? category.zIndex: tag.zIndex}>
      <DropDownPicker
        containerStyle={open? styles.shadowContainer : styles.selectContainer}
        // containerStyle={styles.selectContainer}
        placeholder={name==='category'? category.placeholder : tag.placeholder}
        items = {name==='category'? category.item : tag.item}
        itemStyle={styles.itemStyle}
        style={styles.pickerStyle}
        dropDownStyle={styles.dropDown}
        labelStyle={styles.labelStyle}
        placeholderStyle={{color: '#D8D8D8'}}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        />
    </View>
  )
}

const category= {
  placeholder: '카테고리를 선택해주세요',
  zIndex: {zIndex:200},
  item : [
    {label: '공유해요', value: '공유해요'}, 
    {label: '궁금해요', value: '궁금해요'},
  ],
}

const tag= {
  placeholder: '태그를 선택해주세요',
  zIndex: {zIndex:100},
  item : [
    {label: '태그 1', value: '태그1', }, 
    {label: '태그 2', value: '태그 2'},
  ],
}