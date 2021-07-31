import React, { useState } from 'react';
import { View } from 'react-native';

import { DropDownPicker } from '@components/common';
import { selectbox as styles } from './styles';
import { OrganizationType } from './types';

const Organizations = ['AIDA', 'PADI', 'SSI'];

export default function OrganizationDropdown({
  setGroup,
}: {
  setGroup: (item: string) => void;
}) {
  const label = Organizations.map(org => ({ label: org, value: org }));

  return (
    <View style={styles.container}>
      <DropDownPicker
        items={label}
        placeholder="자격 단체명을 선택해주세요"
        onChangeValue={value => setGroup(value as OrganizationType)}
      />
    </View>
  );
}
