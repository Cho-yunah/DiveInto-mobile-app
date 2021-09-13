import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import Entype from 'react-native-vector-icons/Entypo';

import { ReserveLocationInfoStyles as styles } from './styles';
import { Map } from '@components/LectureDetail/LocationInfo';
import { reserveLocationState } from '@recoil/ProfileStack/store';

export default function ReserveLocationInfo() {
  const location = useRecoilValue(reserveLocationState);
  const latitude = location?.latitude ? location?.latitude : 0;
  const longitude = location?.longitude ? location?.longitude : 0;
  const address = location?.address ? location?.address : '';

  return (
    <View style={styles.container}>
      <Text style={styles.infonTitle}>위치 안내</Text>
      <View style={styles.addressContainer}>
        <Entype name="location-pin" size={14} color={'#FEFEFE'} />
        <Text style={styles.addressText}>{address}</Text>
      </View>

      <View style={styles.mapContainer}>
        <Map latitude={latitude} longitude={longitude} />
      </View>
    </View>
  );
}
