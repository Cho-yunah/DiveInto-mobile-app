import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Color from '@config/colors';
import { HeaderStyles as styles, shadow } from './styles';
import { SearchBoxProps, StaticSearchBoxProps } from './types';

import { useSetRecoilState } from 'recoil';
import { searchText } from '@recoil/LectureStack';
import * as colors from '@config/colors';

export default function SearchBox({ placeholder }: SearchBoxProps) {
  const [text, setText] = useState('');
  const setSearchText = useSetRecoilState(searchText);

  const onSearch = () => setSearchText(text);

  useEffect(() => {
  }, []);

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

export function StaticSearchBox({
  placeholder,
  onPress,
}: StaticSearchBoxProps) {
  const [text, setText] = useState('');
  const setSearchText = useSetRecoilState(searchText);

  const onSearch = () => setSearchText(text);

  return (
    <TouchableOpacity
      style={[styles.searchBar, shadow]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={[styles.searchBarText, { color: colors.placeholder }]}>
        {placeholder}
      </Text>
      <View style={styles.searchButton}>
        <AntDesign name="search1" size={20} color={Color.Gray2} />
      </View>
    </TouchableOpacity>
  );
}
