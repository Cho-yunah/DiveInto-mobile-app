import React from 'react';
import { Text, View } from 'react-native';
import { LocationInfoStyles as styles } from './styles';
import Entype from 'react-native-vector-icons/Entypo';

const LocationInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationInfoTitle}>위치 안내</Text>
      <View style={styles.locationMapContainer}>
        <View style={styles.locationTextContainer}>
          <Entype name="location-pin" size={14} color={'#FEFEFE'} />
          <Text style={styles.locationAddress}>서울시 </Text>
        </View>
        <View style={styles.locationMap}></View>
      </View>
    </View>
  );
};

export default LocationInfo;
