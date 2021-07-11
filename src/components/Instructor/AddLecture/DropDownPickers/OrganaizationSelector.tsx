import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';

const Organizations = ['AIDA', 'PADI'];
export function OrganaizationSelector({ zIndex }: { zIndex?: number }) {
  const [selected, setSelected] = useState();
  const label = Organizations.map(org => ({ label: org, value: org }));
  return (
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
        placeholder="자격 단체명을 선택해주세요."
        items={label}
        zIndex={zIndex}
      />
  );
}
