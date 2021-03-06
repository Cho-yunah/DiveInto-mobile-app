import React, { useState } from 'react';
import { TextInput } from 'react-native';

export function GetInput({
  keyboardType = 'default',
  placeholder = '값을 입력해주세요.',
  hasDoneButton = false,
  editable = true,
  onChange,
}: {
  keyboardType?: 'number-pad' | 'default';
  placeholder?: string;
  hasDoneButton?: boolean;
  editable?: boolean;
  onChange?: (value: string) => void;
}) {
  const [title, setTitle] = useState<string>();
  return (
    <TextInput
      value={title}
      onChangeText={(value: string) => {
        setTitle(value);
        onChange && onChange(value);
      }}
      keyboardType={keyboardType}
      placeholder={placeholder}
      style={{
        padding: 10,
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        marginBottom: 15,
        ...shadow,
      }}
      returnKeyType={
        hasDoneButton || keyboardType === 'number-pad' ? 'done' : 'default'
      }
      editable={editable}
    />
  );
}

export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 3,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,

  elevation: 3,
};
