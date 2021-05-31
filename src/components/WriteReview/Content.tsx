import { contentState } from '@/src/recoil/ReviewStack';
import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useRecoilState } from 'recoil';
import styles from './styles';

const Content = () => {
  const [content, setContent] = useRecoilState(contentState);

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="내용을 작성해주세요."
        placeholderTextColor="#D8D8D8"
        multiline={true}
        value={content}
        onChangeText={(e: string) => {
          if (e.length > 150) return;
          setContent(e);
        }}
        spellCheck={false}
      />
      <View style={styles.textLengthView}>
        <Text style={styles.textLength}>{content.length}/150자</Text>
      </View>
    </View>
  );
};

export default Content;
