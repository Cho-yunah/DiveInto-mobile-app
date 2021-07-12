import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDownPicker } from '@components/common';

import { Organization } from '@typing/common';

import { useSetRecoilState } from 'recoil';
import { OrganaizationSelect } from '@recoil/Instructor/AddLecture';

const Organizations = ['AIDA', 'PADI'];
export function OrganaizationSelector({ zIndex }: { zIndex?: number }) {
  const setOrganization = useSetRecoilState(OrganaizationSelect);
  const label = Organizations.map(org => ({ label: org, value: org }));
  return (
    <DropDownPicker
      onChangeValue={value => setOrganization(value as Organization)}
      placeholder="자격 단체명을 선택해주세요."
      items={label}
      zIndex={zIndex}
    />
  );
}
