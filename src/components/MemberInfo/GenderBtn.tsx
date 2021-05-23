import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// root path
import styles from './styles';

function GenderBtn() {
  const [genderCheck, setGenderCheck] = useState('남성');

  const handleChange = (e: any) => {
    const { children } = e.target._internalFiberInstanceHandleDEV.memoizedProps;

    setGenderCheck(children);
  };

  return (
    <View style={styles.genderTotalContainer}>
      <View
        style={[
          styles.eachGenderBtnContainer,
          genderCheck === '남성' && styles.activeEachGenderBtnContainer,
        ]}
      >
        <TouchableOpacity onPress={handleChange} activeOpacity={0.7}>
          <Text
            style={[
              styles.genderBtnText,
              genderCheck === '남성' && styles.activeGenderBtnText,
            ]}
          >
            남성
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.eachGenderBtnContainer,
          genderCheck === '여성' && styles.activeEachGenderBtnContainer,
        ]}
      >
        <TouchableOpacity onPress={handleChange} activeOpacity={0.7}>
          <Text
            style={[
              styles.genderBtnText,
              genderCheck === '여성' && styles.activeGenderBtnText,
            ]}
          >
            여성
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GenderBtn;
