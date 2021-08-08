import React from 'react';
import { Text, View } from 'react-native';
import { LocationInfoStyles as styles } from './styles';
import Entype from 'react-native-vector-icons/Entypo';
import NaverMapView, { Marker } from 'react-native-nmap';
import { useRecoilValue } from 'recoil';
import {
  lectureCommonSelectorFamily,
  locationResponseType,
} from '@/src/recoil/LectureStack';

const LocationInfo = () => {
  const locationInfo = useRecoilValue(
    lectureCommonSelectorFamily('LocationInfo'),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.locationInfoTitle}>위치 안내</Text>
      <View style={styles.locationMapContainer}>
        <View style={styles.locationTextContainer}>
          <Entype name="location-pin" size={14} color={'#FEFEFE'} />
          <Text style={styles.locationAddress}>
            {locationInfo?.address || '주소가 없습니다.'}{' '}
          </Text>
        </View>
        <View style={styles.locationMap}>
          <Map
            id={locationInfo?.id}
            address={locationInfo?.address}
            latitude={locationInfo?.latitude}
            longitude={locationInfo?.longitude}
          />
        </View>
      </View>
    </View>
  );
};

export function Map({ latitude = 0, longitude = 0 }: locationResponseType) {
  const posCoords = { latitude, longitude };

  return (
    <NaverMapView
      style={{ width: '100%', height: 200 }}
      // showsMyLocationButton={true}
      center={{ ...posCoords, zoom: 15 }}
    >
      <Marker
        coordinate={posCoords}
        onClick={() => console.warn('onClick! p0')}
      />
    </NaverMapView>
  );
}

export default LocationInfo;
