import { StyleSheet } from 'react-native';
import * as colors from '@config/colors';

export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 5,
    height: 5,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,

  elevation: 5,
};

export const MyLectureStyle = StyleSheet.create({
  lectureContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 125,
    backgroundColor: colors.White,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  infoContainer: { margin: 16, justifyContent: 'center' },
  tagList: { marginBottom: 12 },
  titleTag: { fontSize: 14, color: 'black' },
});

export const CostStyle = StyleSheet.create({
  costContainer: { flexDirection: 'row', alignItems: 'center' },
  cost: {
    color: colors.PointBlue,
    fontSize: 18,
    fontWeight: '500',
    marginRight: 5,
  },
});

export const MainImageStyle = StyleSheet.create({
  imageContainer: {
    width: '45%',
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    resizeMode: 'stretch',
  },
});
