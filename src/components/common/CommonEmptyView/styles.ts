import { StyleSheet, Dimensions } from 'react-native';
import * as Color from '@config/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  guideTextStyle: {
    fontSize: 16,
    color: Color.BasicText,
    lineHeight: 21,
    marginBottom: 15,
  },
  buttonStyle: {
    backgroundColor: Color.White,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    borderColor: '#CCD7DF',
    borderWidth: 1,
  },
  buttonTextStyle: {
    fontSize: 16,
  },
});
