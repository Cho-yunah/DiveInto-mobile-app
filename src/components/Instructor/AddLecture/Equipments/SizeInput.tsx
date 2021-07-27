import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import { GetInput } from './GetInput';

import { useRecoilState } from 'recoil';
import { EquipmentList } from '@recoil/Instructor/AddLecture';
export const SizeInput = ({
  idx,
  onSizeInput,
  onQuantityInput,
  onRemoveSizePress,
  sizeInfo,
}: {
  idx: number;
  onSizeInput: (size: string) => void;
  onQuantityInput: (quantity: number) => void;
  onRemoveSizePress: (rmIdx: number) => void;
  sizeInfo: {
    size: string;
    quantity: number;
  };
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GetInput
        onChange={onSizeInput}
        placeholder="사이즈"
        containerStyle={styles.textInputContainer}
        keyboardType="default"
        value={sizeInfo.size}
      />
      <GetInput
        onChange={(quantity: string) => onQuantityInput(parseInt(quantity))}
        placeholder="수량"
        containerStyle={styles.textInputContainer}
        keyboardType="number-pad"
        value={sizeInfo.quantity.toString()}
      />
      <TouchableOpacity
        style={[
          styles.buttonDelete,
          { margin: 0, marginBottom: 5, marginLeft: 3 },
        ]}
        onPress={() => onRemoveSizePress(idx)}
      >
        <Entypo name="minus" style={styles.buttonText} />
      </TouchableOpacity>
    </View>
  );
};
