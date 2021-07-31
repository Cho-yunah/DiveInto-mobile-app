import React, { useState, useEffect } from 'react';
import {} from 'react-native';
import DropDownPickerLib, { ValueType } from 'react-native-dropdown-picker';
import * as color from '@config/colors';

export function DropDownPicker({
  items = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ],
  onChangeValue,
  placeholder,
  multiple = false,
  defaultIndex,
  zIndex = 1,
}: {
  items?: { label: string; value: string }[];
  onChangeValue: (value: ValueType | ValueType[] | null) => void;
  placeholder: string;
  multiple?: boolean;
  defaultIndex?: number;
  zIndex?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<null | string | string[]>(null);

  useEffect(() => {
    console.log('DropDownLIb zIndex : ', zIndex);
    const find = items.find((item, idx) => idx == defaultIndex);
    find && setValue(multiple ? [find.value] : find.value);
    console.log('find : ', find?.value);
  }, [defaultIndex]);

  return (
    <DropDownPickerLib
      open={isOpen}
      value={value}
      items={items}
      setOpen={setIsOpen}
      setValue={setValue}
      onChangeValue={value => {
        console.log('selected value : ', value);
        onChangeValue(value);
      }}
      multiple={multiple}
      min={0}
      max={5}
      placeholder={placeholder}
      placeholderStyle={{ color: color.lightPlaceholder, fontSize: 14 }}
      style={{
        borderWidth: 1.3,
        borderColor: color.White,
        backgroundColor: color.White,
        marginBottom: 18,
        ...shadow,
      }}
      dropDownContainerStyle={{
        borderWidth: 1,
        borderColor: color.Gray2,
        backgroundColor: color.White,
        ...shadow,
      }}
      zIndex={zIndex}
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