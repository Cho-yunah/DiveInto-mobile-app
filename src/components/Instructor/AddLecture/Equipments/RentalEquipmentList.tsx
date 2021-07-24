import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import { SingleEquipInfo } from './SingleEquipInfo';

export const RentalEquipmentList = () => {
  const equipList = [];
  const [len, setLen] = useState(1);

  for (let i = 0; i < len; i += 1) {
    equipList.push(<SingleEquipInfo key={`SingleEquip${i}`} idx={i} />);
  }

  const onPlusPress = () => setLen(len + 1);
  const onMinusPress = () => setLen(len - 1);

  return (
    <>
      {/* 장비정보 입력 배열 */}
      {equipList}

      {/* 장비 추가 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.buttonAdd, styles.shadow]}
          onPress={onPlusPress}
        >
          <Entypo name="plus" style={styles.buttonText} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonDelete, styles.shadow]}
          onPress={onMinusPress}
        >
          <Entypo name="minus" style={styles.buttonText} />
        </TouchableOpacity>
      </View>
    </>
  );
};
