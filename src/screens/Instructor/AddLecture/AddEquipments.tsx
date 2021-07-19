import React, { useState, useLayoutEffect } from 'react';
import {
  ScrollView,
  Text,
  Platform,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Background } from '@config/colors';
import { AddEquipProps } from '@navigators/MyLectureStack/types';

import NextButton from '@components/common/NextButton';
import { RentalEquipmentList } from '@components/Instructor/AddLecture/Equipments';
import Entypo from 'react-native-vector-icons/Entypo';

export function AddEqipments({ navigation }: AddEquipProps) {
  useLayoutEffect(() => {
    const onPress = () => {};
    navigation.setOptions({
      title: '강의등록',
      headerRight: () => <NextButton onPress={onPress} text="완료" />,
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            height: 30,
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 5,
          }}
        >
          장비대여
        </Text>
        <RentalEquipmentList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    // borderWidth: 2,
    // borderRadius: 10,
    // borderColor: '#5DCACB',
    paddingBottom: 50,
  },
  textInputContainer: {
    flex: 1,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  buttonAdd: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#00bbf9',
    // 모달 그림자 설정
    ...Platform.select({
      ios: {
        shadowColor: 'black', // "#020A96",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonDelete: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#ff5d8f',
    // 모달 그림자 설정
    ...Platform.select({
      ios: {
        shadowColor: 'black', // "#020A96",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
