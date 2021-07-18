import { StyleSheet } from 'react-native';

export const LocationInfoStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingVertical: 24,
    marginTop: 4,
    backgroundColor: '#FEFEFE',
  },
  locationInfoTitle: {
    color: '#202020',
  },
  locationMapContainer: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 8,
  },
  locationTextContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(239,198,198)',
    paddingVertical: 8,
    paddingHorizontal: 11,
  },
  locationAddress: { color: '#fefefe', marginLeft: 6 },
  locationMap: {},
});
