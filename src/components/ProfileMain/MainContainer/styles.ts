import { StyleSheet } from 'react-native';
import * as Color from '@config/colors';

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
    paddingBottom: 30,
  },
  buttonText: {
    fontSize: 14,
    color: Color.BlackText,
  },
});
