import React from 'react';
import { Text, View } from 'react-native';
import { LocationInfoStyles as styles } from './styles';
import Entype from 'react-native-vector-icons/Entypo';
import NaverMapView, { Marker } from 'react-native-nmap';
import { useRecoilValueLoadable } from 'recoil';
import {
  lectureCommonSelectorFamily,
  locationResponseType,
} from '@/src/recoil/LectureStack';
import SuspenseLocationInfo from './SuspenseLocationInfo';

const LocationInfo = () => {
  const { state, contents } = useRecoilValueLoadable(
    lectureCommonSelectorFamily('LocationInfo'),
  );
  if (state === 'loading') return <SuspenseLocationInfo />;

  return (
    <View style={styles.container}>
      <Text style={styles.locationInfoTitle}>위치 안내</Text>
      <View style={styles.locationMapContainer}>
        <View style={styles.locationTextContainer}>
          <Entype name="location-pin" size={14} color={'#FEFEFE'} />
          <Text style={styles.locationAddress}>{contents.address} </Text>
        </View>
        <View style={styles.locationMap}>
          <Map
            id={contents.id}
            address={contents.address}
            latitude={contents.latitude}
            longitude={contents.longitude}
          />
        </View>
      </View>
    </View>
  );
};

function Map({ latitude, longitude }: locationResponseType) {
  const posCoords = { latitude, longitude };

  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
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
