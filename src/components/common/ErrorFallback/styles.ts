import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@config/colors';

const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 10,
  },
  infoLayout: {
    width: WIDTH - 150,
    alignItems: 'center',
    paddingVertical: 15,
  },
  infoText: {
    letterSpacing: 1.2,
  },
  buttonLayout: {
    backgroundColor: Color.PointBlue,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: Color.White,
    fontWeight: '600',
  },
});
