import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';

const Content = () => {
  const [textValue, setTextValue] = useState<string>('');

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="내용을 작성해주세요."
        placeholderTextColor="#D8D8D8"
        multiline={true}
        value={textValue}
        onChangeText={(e: string) => setTextValue(e)}
        spellCheck={false}
      />
      <View style={styles.textLengthView}>
        <Text style={styles.textLength}>{textValue.length}/150자</Text>
      </View>
    </View>
  );
};

export default Content;
