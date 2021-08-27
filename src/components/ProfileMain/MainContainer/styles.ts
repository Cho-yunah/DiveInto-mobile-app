import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';
import * as getDimention from '@/src/config/windowDimention';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Color.White,
    paddingHorizontal: 18,
  },
});

export const commonButton = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 25,
    // borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    color: Color.BlackText,
  },
});
