import React from 'react'
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {SelectStyle as styles} from './styles'
import { atom, atomFamily, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const categoryAndTagState = atomFamily<Element, string>({
  key: 'categoryAndTagState',
  default: ''
})

const pickerOpenState = atom({
  key: 'pickerOpenState',
  default: false
})

export default function SelectBox() {
  const pickerOpen = useRecoilValue(pickerOpenState)
  const setPickerOpen = useSetRecoilState(pickerOpenState)

    return (
      <>
        <Category pickerOpen={pickerOpen} setPickerOpen={setPickerOpen}/>
        <Tag pickerOpen={pickerOpen} setPickerOpen={setPickerOpen}/>
      </>
  )
}

const Category= ({pickerOpen, setPickerOpen}: any) => {
  const categoryItem = [
    {label: '공유해요', value: '공유해요'}, 
    {label: '궁금해요', value: '궁금해요'},
  ]

  const [category, setCategory] = useRecoilState(categoryAndTagState('category'))  
  console.log(category)

  return (
    <View style={{zIndex:200}}>
        <DropDownPicker
        containerStyle={pickerOpen? styles.shadowContainer : styles.selectContainer}
        placeholder={'카테고리를 선택해주세요'}
        placeholderStyle={{color: '#D8D8D8'}}
        items = {categoryItem}
        itemStyle={styles.itemStyle}
        style={styles.pickerStyle}
        dropDownStyle={styles.dropDown}
        labelStyle={styles.labelStyle}
        onOpen={() => setPickerOpen(true)}
        onClose={() => setPickerOpen(false)}
        onChangeItem={item => setCategory(item.value)}        
        />
    </View>
  )
}

const Tag=({pickerOpen, setPickerOpen}: any) => {
  const tagItem= [
    {label: '태그 1', value: '태그1', }, 
    {label: '태그 2', value: '태그 2'},
  ]
  const [tag, setTag] = useRecoilState(categoryAndTagState('tag'))  
  console.log(tag)

  return (
    <View style={{zIndex:100}}>
        <DropDownPicker
        containerStyle={pickerOpen? styles.shadowContainer : styles.selectContainer}
        placeholder={'태그를 선택해주세요'}
        items = {tagItem}
        itemStyle={styles.itemStyle}
        style={styles.pickerStyle}
        dropDownStyle={styles.dropDown}
        labelStyle={styles.labelStyle}
        placeholderStyle={{color: '#D8D8D8'}}
        onOpen={() => setPickerOpen(true)}
        onClose={() => setPickerOpen(false)}
        onChangeItem={item => setTag(item.value)}        
       />
    </View>
  )
}