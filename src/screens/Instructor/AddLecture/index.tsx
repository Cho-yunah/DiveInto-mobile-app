import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';
export function AddLecture() {
  const [selected, setSelected] = useState();
  const label = [
    {
      label: 'USA',
      value: 'usa',
    },
    {
      label: 'UK',
      value: 'uk',
    },
    {
      label: 'France',
      value: 'france',
    },
  ];
  return (
    <View>
      <Text>hi</Text>
      <DropDownPicker
        onChangeValue={
          values => {}
          // values !== null &&
          // setSelected(
          //   (values as string[]).length !== 0
          //     ? parseInt((values as string[])[0])
          //     : undefined,
          // )
          // console.log('values : ', values)
        }
        placeholder="작성할 아카데미를 선택해주세요"
        items={label}
      />
    </View>
  );
}
