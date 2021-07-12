import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from './Switch';

import { Modal } from '@components/common';
import { WheelPicker } from '@components/common';

export function GetPeriod() {
  const [isVisible, setIsVisible] = useState(false);
  const [period, setPeriod] = useState(1);

  const onPress = (idx: 0 | 1) => {
    idx === 0 && setPeriod(1);
    if (idx === 1) {
      setIsVisible(true);
      setPeriod(period === 1 ? 2 : period);
    }
  };

  const itemList = Array.from({ length: 10 }, (v, i) => `${i + 2}`);
  const onPeriodSelect = (value: string) => setPeriod(parseInt(value));

  return (
    <>
      <Switch
        buttonText1="단회차"
        buttonText2={period !== 1 ? `다회차 (${period}일)` : '다회차'}
        onPress={onPress}
      />
      <Modal
        title="소요 일수"
        visible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <View style={{ flexDirection: 'row' }}>
          <WheelPicker
            itemList={itemList}
            onSelect={onPeriodSelect}
            defaultIdx={period - 2}
          />
          <Text style={styles.modalText}>일</Text>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalText: { alignSelf: 'center', paddingTop: 30 },
});
