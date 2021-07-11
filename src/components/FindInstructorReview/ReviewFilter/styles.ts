import { StyleSheet, Platform } from 'react-native';
import * as Color from '@config/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
});

export const ReviewFilterStyle = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: Color.White,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
  },
  activeButtonStyle: {
    backgroundColor: Color.PointBlue,
  },
  textStyle: {
    fontSize: 12,
    color: Color.BasicText,
  },
  activeTextStyle: {
    color: Color.White,
  },
});
