import React, { useState } from 'react'
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {SelectStyle as styles} from './styles'
import { useRecoilState, useRecoilValue } from 'recoil';
import { communityItemSelector, postingFormState } from '@/src/recoil/CommunityStack';
import { useRequestCommunityItem } from '../CommunityDetail/useRequestCommunityItem';

export default function SelectBox({id}:any) {
  // 상세 페이지에서 수정 요청을 보낼때 해당 글 정보받아오기 
  id && useRequestCommunityItem(id) 
  const {category, tags} = id? useRecoilValue(communityItemSelector) : {category: '', tags: ''}

  return (
    <>
      <Category  category={category} />
      <Tag tags={tags} />
    </>
  )
}

// Category Component
const Category= ({category}:any) => {
  const [categoryItem, setCategoryItem] = useState([
    {label: '공유해요', value: 'SHARE'}, 
    {label: '궁금해요', value: 'QUESTION'},
  ])
  const [categoryValue, setCategoryValue] = useRecoilState(postingFormState('category'));
  const [open, setOpen] = useState(false);

  return (
    <View style={{zIndex:200}}>
        <DropDownPicker
          placeholder={'카테고리를 선택해주세요'}
          placeholderStyle={{color: '#D8D8D8'}}
          items = {categoryItem}
          setItems={setCategoryItem}
          open={open}
          setOpen={setOpen}
          value={categoryValue}
          setValue={setCategoryValue}
          /// style
          style={styles.pickerStyle}
          containerStyle={styles.shadowContainer}
          labelStyle={styles.labelStyle}
          dropDownContainerStyle={styles.dropDown}
        />
    </View>
  )
}

// Tag Component
const Tag=({tags}: any) => {
  const [tagItem, setTagItem]= useState([
    {label: '다이빙 스킬 전수', value: '다이빙 스킬 전수'}, 
    {label: '초보는 드루와', value: '초보는 드루와'},
  ])
  const [tagsValue, setTagsValue] = useRecoilState(postingFormState('tags'))  
  const [open, setOpen] = useState(false);

  return (
    <View style={{zIndex:100}}>
        <DropDownPicker
        placeholder={'태그를 선택해주세요'}
        placeholderStyle={{color: '#D8D8D8'}}
        items = {tagItem}
        setItems={setTagItem}
        open={open}
        setOpen={setOpen}
        value={tagsValue}
        setValue={setTagsValue}
        /// style
        style={styles.pickerStyle}
        containerStyle={open? styles.shadowContainer : styles.selectContainer}
        labelStyle={styles.labelStyle}
        dropDownContainerStyle={styles.dropDown}
       />
    </View>
  )
}