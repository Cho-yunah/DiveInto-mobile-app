import { StyleSheet } from 'react-native';

export const LecturePicsStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
  },
  carouselImage: { height: 195 },
  dotIndicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10,
  },
  dotIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(224, 224, 225, 0.6)',
    marginRight: 5,
  },
  dotIndicatorActive: {
    marginRight: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e1',
  },
});
