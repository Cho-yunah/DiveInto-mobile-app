import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { commonButton as styles } from '../styles';
import { ShowOutputModalProps } from './types';
import CommonModal from '../CommonModal';

export default function ShowOutpuModal({ title, desc }: ShowOutputModalProps) {
  const [show, setShow] = useState(false);

  const toggleShowModal = (): void => {
    setShow(!show);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleShowModal}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{title}</Text>
        <AntDesign name="right" size={12} color={'#6A6D70'} />
      </TouchableOpacity>

      <CommonModal
        show={show}
        mode="output"
        desc={desc}
        toggleShowModal={toggleShowModal}
      />
    </View>
  );
}
