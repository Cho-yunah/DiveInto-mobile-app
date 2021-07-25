import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { FAQListItem as styles } from './styles';
import { FAQListItemProps, FAQstaticDataProps } from './types';
import {
  FAQLecturerContents as FLC,
  FAQManualContents as FMC,
  FAQComplainContents as FCC,
  FAQETCContents as FEC,
} from '@assets/data/FAQStaticData';
import { FAQContents } from '@components/DetailNotice/AboutFAQ';

export default function FAQListItem({ desc, FAQ_id, type }: FAQListItemProps) {
  const [contents, setContents] = useState<FAQstaticDataProps>(undefined);
  const [show, setShow] = useState(false);

  const onPress = () => {
    // 타입에 따라서 받아오는 정적 데이터을 위한 로직(useReducer or hook로 바꿀 예정)
    let findContents;

    switch (type) {
      case 'manual':
        findContents = FMC.find(({ id }) => FAQ_id === id);
        break;
      case 'lecturer':
        findContents = FLC.find(({ id }) => FAQ_id === id);
        break;

      case 'complain':
        findContents = FCC.find(({ id }) => FAQ_id === id);
        break;
      case 'ETC':
        findContents = FEC.find(({ id }) => FAQ_id === id);
        break;
    }

    setContents(findContents);
    setShow(state => !state);
  };

  const showContentsEl = show ? (
    <FAQContents subject={contents?.subject} descList={contents?.DescList} />
  ) : undefined;

  return (
    <View
      style={{
        backgroundColor: 'white',
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
          <Text style={styles.text}>{desc}</Text>
        </TouchableOpacity>
      </View>
      {showContentsEl}
    </View>
  );
}
