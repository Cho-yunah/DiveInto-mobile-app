import React, { useState } from 'react';
import { TextInput, StyleSheet, View, ViewStyle } from 'react-native';

export function GetInput({
  keyboardType = 'default',
  placeholder = '값을 입력해주세요.',
  hasDoneButton = false,
  editable = true,
  onChange,
  containerStyle,
  value,
}: {
  keyboardType?: 'number-pad' | 'default';
  placeholder?: string;
  hasDoneButton?: boolean;
  editable?: boolean;
  onChange?: (value: string) => void;
  containerStyle?: ViewStyle;
  value?: string;
}) {
  const [title, setTitle] = useState<string>();
  return (
    <View style={[styles.textContainer, styles.shadow, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={(value: string) => {
          setTitle(value);
          onChange && onChange(value);
        }}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.textOneline}
        returnKeyType={
          hasDoneButton || keyboardType === 'number-pad' ? 'done' : 'default'
        }
        editable={editable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    // backgroundColor: '#4CB1F755',
    borderColor: '#5DCACB', // 'gray', //lightgray
    borderWidth: 2,
    alignItems: 'center',
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textOneline: {
    height: 35,
    padding: 10,
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 3,
  },
});
