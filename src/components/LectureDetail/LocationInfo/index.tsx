import React from 'react';
import { Text, View } from 'react-native';
import { LocationInfoStyles as styles } from './styles';
import Entype from 'react-native-vector-icons/Entypo';
import NaverMapView, { Marker, Path } from 'react-native-nmap';
import { useRecoilValue } from 'recoil';
import {
  locationResponseType,
  requestLocationInfoSelector,
} from '@/src/recoil/LectureStack';

const LocationInfo = () => {
  const { address, latitude, longitude, id } = useRecoilValue(
    requestLocationInfoSelector(1),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.locationInfoTitle}>위치 안내</Text>
      <View style={styles.locationMapContainer}>
        <View style={styles.locationTextContainer}>
          <Entype name="location-pin" size={14} color={'#FEFEFE'} />
          <Text style={styles.locationAddress}>{address} </Text>
        </View>
        <View style={styles.locationMap}>
          <Map
            id={id}
            address={address}
            latitude={latitude}
            longitude={longitude}
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
      onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
      onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
    >
      <Marker
        coordinate={posCoords}
        onClick={() => console.warn('onClick! p0')}
      />
    </NaverMapView>
  );
}

export default LocationInfo;
