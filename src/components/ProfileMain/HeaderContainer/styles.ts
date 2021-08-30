import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';
import * as getDimension from '@config/windowDimention';

console.log(getDimension.HEIGHT);

export const mainHeaderStyles = StyleSheet.create({
  rootContainer: {
    height: '30%',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderColor: '#A9BBC9',
    borderRadius: 50,
    marginBottom: 8,
  },
  changeImageButton: {
    color: Color.deepBlue,
    fontSize: 16,
    fontWeight: '500',
  },
});

export const lecturerHeaderStyles = StyleSheet.create({
  rootContainer: {
    height: '30%',
    marginTop: 40,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
