import React from 'react'
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {SelectStyle as styles} from './styles'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { communityItemSelector, pickerOpenState, postingFormState } from '@/src/recoil/CommunityStack';
import { useRequestCommunityItem } from '../CommunityDetail/useRequestCommunityItem';

export default function SelectBox({id}:any) {
  const pickerOpen = useRecoilValue(pickerOpenState)
  const setPickerOpen = useSetRecoilState(pickerOpenState)

  // 상세 페이지에서 수정 요청을 보낼때 해당 글 정보받아오기 
  id && useRequestCommunityItem(id) 
  const {category, tags} = useRecoilValue(communityItemSelector)

  return (
    <>
      <Category pickerOpen={pickerOpen} setPickerOpen={setPickerOpen} category={category} />
      <Tag pickerOpen={pickerOpen} setPickerOpen={setPickerOpen} tags={tags} />
    </>
  )
}

// Category Component
const Category= ({pickerOpen, setPickerOpen, category}: any) => {
  const categoryItem = [
    {label: '공유해요', value: 'SHARE'}, 
    {label: '궁금해요', value: 'QUESTION'},
  ]

  const [selectCategory, setSelectCategory] = useRecoilState(postingFormState('category'))  

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
          defaultValue={category? category: ''}
          onOpen={() => setPickerOpen(true)}
          onClose={() => setPickerOpen(false)}
          onChangeItem= {
             ()=> setSelectCategory(category)
          }  
        />
    </View>
  )
}

// Tag Component
const Tag=({pickerOpen, setPickerOpen, tags}: any) => {
  const tagItem= [
    {label: '태그 1', value: '태그1', }, 
    {label: '태그 2', value: '태그 2'},
  ]
  const [selectTag, setSelectTag] = useRecoilState(postingFormState('tags'))  

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
        defaultValue={tags? tags: ''}
        onChangeItem= {
         ()=> setSelectTag(tags)
        }      
       />
    </View>
  )
}