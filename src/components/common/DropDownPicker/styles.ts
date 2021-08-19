import { StyleSheet } from 'react-native';
import * as color from '@config/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1.3,
    borderColor: color.White,
    backgroundColor: color.White,
    marginBottom: 18,
  },
  noneContainer: {
    borderWidth: 1.3,
    borderColor: color.White,
    backgroundColor: color.White,
    marginBottom: 0,
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: color.Gray2,
    backgroundColor: color.White,
  },
  commonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 3,
  },
});
