import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Color from '@config/colors';
import { HeaderStyles as styles, shadow } from './styles';
import { SearchBoxProps } from './types';

import { useSetRecoilState } from 'recoil';
import { searchText } from '@recoil/LectureStack';
import * as colors from '@config/colors';

export default function SearchBox({ placeholder }: SearchBoxProps) {
  const [text, setText] = useState('');
  const setSearchText = useSetRecoilState(searchText);

  const onSearch = () => setSearchText(text);

  return (
    <View style={[styles.searchBar, shadow]}>
      <TextInput
        style={styles.searchBarText}
        placeholder={placeholder}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onSearch}
        placeholderTextColor={colors.placeholder}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
        <AntDesign name="search1" size={20} color={Color.Gray2} />
      </TouchableOpacity>
    </View>
  );
}
